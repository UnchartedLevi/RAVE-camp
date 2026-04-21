import { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import {
  Check,
  Upload,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type FormData = {
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone: string;
  relationship: string;
  emergencyContact: string;
  emergencyPhone: string;
  childFirstName: string;
  childLastName: string;
  childAge: string;
  childGender: string;
  allergies: string;
  medications: string;
  medicalConditions: string;
  dietaryRestrictions: string;
  specialNeeds: string;
  tshirtSize: string;
  swimmingAbility: string;
  pickupAuthorization: string;
};

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwF-DcA3qduNNK14zSJVfS1xT8Tya0oPj8L9lfEblUwy9deEoXsl7iisbX8KxxJ4SiR/exec';

export function Registration() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  // SUCCESS SCREEN
  if (isSubmitted) {
    return (
      <section id="register" className="py-8 bg-background transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-3xl p-8 sm:p-12"
          >
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
              Registration Complete! 🎉
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Check your email for confirmation and next steps. We can't wait to
              welcome your child to R.A.V.E. Camp!
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
    <section id="register" className="py-8 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 rounded-3xl px-4 py-6 sm:px-6 sm:py-8
            bg-card border border-border shadow-lg backdrop-blur-md transition-colors duration-300"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-foreground">
              Limited Spots Available
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4 tracking-tight">
            Register Your Child
          </h2>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your child's spot in this transformative leadership experience.
          </p>
        </motion.div>

        {/* PROGRESS */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold transition-all duration-300 text-xs sm:text-sm ${
                  step >= s
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>

              {s < 4 && (
                <div
                  className={`w-6 sm:w-14 h-0.5 mx-1 sm:mx-2 transition-colors duration-300 ${
                    step > s
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl p-5 sm:p-8 lg:p-10 border shadow-xl
            bg-card border-border backdrop-blur-md transition-colors duration-300"
        >
          {/* STEP 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-foreground">
                Parent / Guardian Information
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="parentFirstName" className="mb-2 block">First Name *</Label>
                  <Input
                    id="parentFirstName"
                    {...register('parentFirstName', { required: true })}
                    placeholder="Jane"
                    className="h-12"
                  />
                  {errors.parentFirstName && (
                    <span className="text-red-500 text-sm mt-2 block">Required field</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="parentLastName" className="mb-2 block">Last Name *</Label>
                  <Input
                    id="parentLastName"
                    {...register('parentLastName', { required: true })}
                    placeholder="Doe"
                    className="h-12"
                  />
                  {errors.parentLastName && (
                    <span className="text-red-500 text-sm mt-2 block">Required field</span>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="parentEmail" className="mb-2 block">Email Address *</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  {...register('parentEmail', { required: true })}
                  placeholder="jane@example.com"
                  className="h-12"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="parentPhone" className="mb-2 block">Phone Number *</Label>
                  <Input
                    id="parentPhone"
                    {...register('parentPhone', { required: true })}
                    placeholder="+234..."
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Relationship *</Label>
                  <Select onValueChange={(value) => setValue('relationship', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                      <SelectItem value="guardian">Guardian</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="emergencyContact" className="mb-2 block">Emergency Contact *</Label>
                  <Input
                    id="emergencyContact"
                    {...register('emergencyContact', { required: true })}
                    placeholder="Full name"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="emergencyPhone" className="mb-2 block">Emergency Phone *</Label>
                  <Input
                    id="emergencyPhone"
                    {...register('emergencyPhone', { required: true })}
                    placeholder="+234..."
                    className="h-12"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Next <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-foreground">Child Information</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label className="mb-2 block">First Name *</Label>
                  <Input {...register('childFirstName', { required: true })} className="h-12" />
                </div>
                <div>
                  <Label className="mb-2 block">Last Name *</Label>
                  <Input {...register('childLastName', { required: true })} className="h-12" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label className="mb-2 block">Age *</Label>
                  <Input type="number" {...register('childAge', { required: true })} className="h-12" />
                </div>
                <div>
                  <Label className="mb-2 block">Gender *</Label>
                  <Select onValueChange={(value) => setValue('childGender', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label className="mb-2 block">T-Shirt Size *</Label>
                  <Select onValueChange={(value) => setValue('tshirtSize', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Swimming Ability</Label>
                  <Select onValueChange={(value) => setValue('swimmingAbility', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select ability" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="none">Cannot swim</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  <ChevronLeft className="mr-2 w-4 h-4" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Next <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-foreground">
                Medical & Safety Information
              </h3>

              <div>
                <Label className="mb-2 block">Known Allergies *</Label>
                <Textarea {...register('allergies', { required: true })} className="min-h-[100px]" />
              </div>

              <div>
                <Label className="mb-2 block">Current Medications</Label>
                <Textarea {...register('medications')} />
              </div>

              <div>
                <Label className="mb-2 block">Medical Conditions</Label>
                <Textarea {...register('medicalConditions')} />
              </div>

              <div>
                <Label className="mb-2 block">Dietary Restrictions</Label>
                <Input {...register('dietaryRestrictions')} className="h-12" />
              </div>

              <div>
                <Label className="mb-2 block">Special Needs / Accommodations</Label>
                <Textarea {...register('specialNeeds')} />
              </div>

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  <ChevronLeft className="mr-2 w-4 h-4" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  Next <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-black text-foreground">
                Pickup Authorization & Documents
              </h3>

              <div>
                <Label className="mb-2 block">Authorized Pickup Persons *</Label>
                <Textarea
                  {...register('pickupAuthorization', { required: true })}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label className="mb-2 block">Upload Medical Consent Form</Label>
                <input
                  id="medicalConsent"
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="medicalConsent"
                  className="flex items-center justify-center gap-3 w-full
                    bg-muted/50 border-2 border-dashed border-border rounded-2xl p-6
                    cursor-pointer hover:bg-muted transition-colors duration-200"
                >
                  <Upload className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium text-foreground">
                    {fileName || 'Click to upload file'}
                  </span>
                </label>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-5">
                <h4 className="font-bold text-foreground mb-3">Consent & Agreement</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-purple-500 mt-0.5" />
                    Emergency treatment authorization
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-purple-500 mt-0.5" />
                    Photo / video consent
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-purple-500 mt-0.5" />
                    Accept terms & policies
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-purple-500 mt-0.5" />
                    Information is accurate
                  </li>
                </ul>
              </div>

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => setStep(3)}>
                  <ChevronLeft className="mr-2 w-4 h-4" /> Back
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-8"
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </section>
  );
}