import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Check, Upload, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type FormData = {
  // Parent/Guardian Info
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  relationship: string;
  emergencyContact: string;
  emergencyPhone: string;

  // Child Info
  childFirstName: string;
  childLastName: string;
  childAge: string;
  childGender: string;

  // Medical & Safety
  allergies: string;
  medications: string;
  medicalConditions: string;
  dietaryRestrictions: string;
  specialNeeds: string;

  // Additional
  tshirtSize: string;
  swimmingAbility: string;
  pickupAuthorization: string;
};

export function Registration() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-32 lg:py-40 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-3xl p-16"
          >
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-5xl font-black text-foreground mb-6">
              Registration Complete! 🎉
            </h2>
            <p className="text-2xl text-muted-foreground mb-10">
              Check your email for confirmation and next steps. We can't wait to welcome your child to R.A.V.E. Camp!
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              variant="outline"
              size="lg"
              className="border-2"
            >
              Register Another Child
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-32 lg:py-40 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-base font-semibold text-foreground">Limited Spots Available</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight">
            Register Your Child
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Secure your child's spot in this transformative leadership experience. Complete registration closes soon.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 text-xs sm:text-base ${step >= s
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-100 sm:scale-110'
                    : 'bg-muted text-muted-foreground'
                  }`}
              >
                {step > s ? <Check className="w-4 h-4 sm:w-6 sm:h-6" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-6 h-0.5 sm:w-16 sm:h-1 mx-1 sm:mx-3 transition-all duration-300 ${step > s ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-muted'
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-3xl p-10 lg:p-12">
          {/* Step 1: Parent/Guardian Information */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-black text-foreground mb-8">Parent/Guardian Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parentFirstName" className="text-foreground mb-3 block text-base">First Name *</Label>
                  <Input
                    id="parentFirstName"
                    {...register('parentFirstName', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="Jane"
                  />
                  {errors.parentFirstName && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>

                <div>
                  <Label htmlFor="parentLastName" className="text-foreground mb-3 block text-base">Last Name *</Label>
                  <Input
                    id="parentLastName"
                    {...register('parentLastName', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="Doe"
                  />
                  {errors.parentLastName && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>
              </div>

              <div>
                <Label htmlFor="parentEmail" className="text-foreground mb-3 block text-base">Email Address *</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  {...register('parentEmail', { required: true })}
                  className="bg-muted/50 border-border text-foreground h-14 text-base"
                  placeholder="jane.doe@example.com"
                />
                {errors.parentEmail && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parentPhone" className="text-foreground mb-3 block text-base">Phone Number *</Label>
                  <Input
                    id="parentPhone"
                    {...register('parentPhone', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="+234 XXX XXX XXXX"
                  />
                  {errors.parentPhone && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>

                <div>
                  <Label htmlFor="relationship" className="text-foreground mb-3 block text-base">Relationship to Child *</Label>
                  <Select onValueChange={(value) => setValue('relationship', value)}>
                    <SelectTrigger className="bg-muted/50 border-border text-foreground h-14 text-base">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="guardian">Legal Guardian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="emergencyContact" className="text-foreground mb-3 block text-base">Emergency Contact Name *</Label>
                  <Input
                    id="emergencyContact"
                    {...register('emergencyContact', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="Full name"
                  />
                  {errors.emergencyContact && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>

                <div>
                  <Label htmlFor="emergencyPhone" className="text-foreground mb-3 block text-base">Emergency Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    {...register('emergencyPhone', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="+234 XXX XXX XXXX"
                  />
                  {errors.emergencyPhone && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
                >
                  Next <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Child Information */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-black text-foreground mb-8">Child Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="childFirstName" className="text-foreground mb-3 block text-base">Child's First Name *</Label>
                  <Input
                    id="childFirstName"
                    {...register('childFirstName', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="John"
                  />
                  {errors.childFirstName && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>

                <div>
                  <Label htmlFor="childLastName" className="text-foreground mb-3 block text-base">Child's Last Name *</Label>
                  <Input
                    id="childLastName"
                    {...register('childLastName', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="Doe"
                  />
                  {errors.childLastName && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="childAge" className="text-foreground mb-3 block text-base">Age *</Label>
                  <Input
                    id="childAge"
                    type="number"
                    {...register('childAge', { required: true })}
                    className="bg-muted/50 border-border text-foreground h-14 text-base"
                    placeholder="12"
                  />
                  {errors.childAge && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
                </div>

                <div>
                  <Label htmlFor="childGender" className="text-foreground mb-3 block text-base">Gender *</Label>
                  <Select onValueChange={(value) => setValue('childGender', value)}>
                    <SelectTrigger className="bg-muted/50 border-border text-foreground h-14 text-base">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="tshirtSize" className="text-foreground mb-3 block text-base">T-Shirt Size *</Label>
                  <Select onValueChange={(value) => setValue('tshirtSize', value)}>
                    <SelectTrigger className="bg-muted/50 border-border text-foreground h-14 text-base">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">Extra Small (XS)</SelectItem>
                      <SelectItem value="s">Small (S)</SelectItem>
                      <SelectItem value="m">Medium (M)</SelectItem>
                      <SelectItem value="l">Large (L)</SelectItem>
                      <SelectItem value="xl">Extra Large (XL)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="swimmingAbility" className="text-foreground mb-3 block text-base">Swimming Ability</Label>
                  <Select onValueChange={(value) => setValue('swimmingAbility', value)}>
                    <SelectTrigger className="bg-muted/50 border-border text-foreground h-14 text-base">
                      <SelectValue placeholder="Select ability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Cannot swim</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  size="lg"
                  className="border-2 px-8"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
                >
                  Next <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Medical & Safety Information */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-black text-foreground mb-8">Medical & Safety Information</h3>

              <div>
                <Label htmlFor="allergies" className="text-foreground mb-3 block text-base">Known Allergies *</Label>
                <Textarea
                  id="allergies"
                  {...register('allergies', { required: true })}
                  className="bg-muted/50 border-border text-foreground min-h-[100px] text-base"
                  placeholder="List any allergies (food, medication, environmental) or write 'None'"
                />
                {errors.allergies && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
              </div>

              <div>
                <Label htmlFor="medications" className="text-foreground mb-3 block text-base">Current Medications</Label>
                <Textarea
                  id="medications"
                  {...register('medications')}
                  className="bg-muted/50 border-border text-foreground min-h-[100px] text-base"
                  placeholder="List any medications your child is taking, including dosage and frequency, or write 'None'"
                />
              </div>

              <div>
                <Label htmlFor="medicalConditions" className="text-foreground mb-3 block text-base">Medical Conditions</Label>
                <Textarea
                  id="medicalConditions"
                  {...register('medicalConditions')}
                  className="bg-muted/50 border-border text-foreground min-h-[100px] text-base"
                  placeholder="List any medical conditions (asthma, diabetes, epilepsy, etc.) or write 'None'"
                />
              </div>

              <div>
                <Label htmlFor="dietaryRestrictions" className="text-foreground mb-3 block text-base">Dietary Restrictions</Label>
                <Input
                  id="dietaryRestrictions"
                  {...register('dietaryRestrictions')}
                  className="bg-muted/50 border-border text-foreground h-14 text-base"
                  placeholder="Vegetarian, Vegan, Halal, Kosher, etc."
                />
              </div>

              <div>
                <Label htmlFor="specialNeeds" className="text-foreground mb-3 block text-base">Special Needs or Accommodations</Label>
                <Textarea
                  id="specialNeeds"
                  {...register('specialNeeds')}
                  className="bg-muted/50 border-border text-foreground min-h-[100px] text-base"
                  placeholder="Please share any special needs, behavioral considerations, or accommodations we should be aware of"
                />
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  variant="outline"
                  size="lg"
                  className="border-2 px-8"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(4)}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
                >
                  Next <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Final Details & Consent */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-black text-foreground mb-8">Pickup Authorization & Documents</h3>

              <div>
                <Label htmlFor="pickupAuthorization" className="text-foreground mb-3 block text-base">Authorized Pickup Persons *</Label>
                <Textarea
                  id="pickupAuthorization"
                  {...register('pickupAuthorization', { required: true })}
                  className="bg-muted/50 border-border text-foreground min-h-[100px] text-base"
                  placeholder="List names of people authorized to pick up your child. Include phone numbers."
                />
                {errors.pickupAuthorization && <span className="text-red-500 text-sm mt-2 block">Required field</span>}
              </div>

              <div>
                <Label htmlFor="medicalConsent" className="text-foreground mb-3 block text-base">Upload Medical Consent Form (Optional)</Label>
                <div className="relative">
                  <input
                    id="medicalConsent"
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label
                    htmlFor="medicalConsent"
                    className="flex items-center justify-center gap-3 w-full bg-muted/50 border-2 border-dashed border-border rounded-2xl p-8 cursor-pointer hover:bg-muted transition-colors"
                  >
                    <Upload className="w-6 h-6 text-purple-500" />
                    <span className="text-foreground font-medium">
                      {fileName || 'Click to upload file (PDF, DOC, Image)'}
                    </span>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  If you have a pre-signed medical consent form, you can upload it here.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-foreground mb-3">Important Consent & Agreement</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>I authorize R.A.V.E. Camp staff to seek emergency medical treatment if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>I consent to my child being photographed/videoed for camp documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>I have read and agree to the camp's terms, conditions, and safety policies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>All information provided is accurate and complete to the best of my knowledge</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  variant="outline"
                  size="lg"
                  className="border-2 px-8"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" /> Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10"
                >
                  Submit
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
}
