import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, Controller } from 'react-hook-form';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertCircle,
  Ticket,
  Users,
  Zap,
  ChevronDown,
  ChevronUp,
  UserPlus,
} from 'lucide-react';

import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

// ─── Types ────────────────────────────────────────────────────────
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
};

type ChildInfo = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  tshirtSize: string;
  swimmingAbility: string;
  allergies: string;
  medications: string;
  medicalConditions: string;
  dietaryRestrictions: string;
  specialNeeds: string;
};

const EMPTY_CHILD: ChildInfo = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  tshirtSize: '',
  swimmingAbility: '',
  allergies: '',
  medications: '',
  medicalConditions: '',
  dietaryRestrictions: '',
  specialNeeds: '',
};

// Tell TypeScript about PaystackPop, injected by the inline script
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: {
        key: string;
        email: string;
        amount: number; // in kobo
        currency: string;
        ref: string;
        metadata?: object;
        callback: (response: { reference: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

// ─── Constants ────────────────────────────────────────────────────
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwYH6AM7EOOR3tMrzHLAIvIAblk70wkbwNwHBva_VTVnXQUU6BsnIuuo5p0P2kuMJLg/exec';

const PAYSTACK_PUBLIC_KEY = 'pk_live_2e591f6072df1c4a685f45196cf64b96fddf28ba';

const TICKET_OPTIONS = [
  {
    value: 'early_bird' as const,
    label: 'Early Bird',
    amount: 12000000, // kobo = ₦120,000
    display: '₦120,000',
    description: "Limited slots — grab yours before they're gone",
    icon: Zap,
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-400/40',
    bg: 'bg-amber-500/10',
    groupTicket: false,
  },
  {
    value: 'standard' as const,
    label: 'Standard Pack',
    amount: 15000000, // kobo = ₦150,000
    display: '₦150,000',
    description: 'Full camp experience for your child',
    icon: Ticket,
    color: 'from-purple-600 to-pink-600',
    border: 'border-purple-400/40',
    bg: 'bg-purple-500/10',
    groupTicket: false,
  },
  {
    value: 'group_of_5' as const,
    label: 'Group of 5',
    amount: 65000000, // kobo = ₦650,000
    display: '₦650,000',
    description: 'Register 5 kids together and save',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-400/40',
    bg: 'bg-emerald-500/10',
    groupTicket: true,
  },
];

const singleLineClass =
  'min-h-0 h-12 resize-none overflow-hidden leading-[2.8rem] py-0 px-3';

const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Prefer not to say' },
];

const TSHIRT_OPTIONS = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' },
];

const SWIM_OPTIONS = [
  { value: 'none', label: 'Cannot swim' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

// ─── ChildCard ────────────────────────────────────────────────────
function ChildCard({
  index,
  child,
  onChange,
}: {
  index: number;
  child: ChildInfo;
  onChange: (updated: ChildInfo) => void;
}) {
  const [expanded, setExpanded] = useState(index === 1); // auto-open first card

  const set = (field: keyof ChildInfo, value: string) =>
    onChange({ ...child, [field]: value });

  const summary =
    child.firstName || child.lastName
      ? `${child.firstName} ${child.lastName}`.trim()
      : 'Not filled in yet';

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-muted/40 hover:bg-muted/60 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            {index}
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm text-foreground">Child {index}</p>
            <p className="text-xs text-muted-foreground">{summary}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="p-5 space-y-4 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block text-xs">First Name</Label>
                  <Textarea value={child.firstName} onChange={(e) => set('firstName', e.target.value)} className={singleLineClass} placeholder="e.g. Amaka" />
                </div>
                <div>
                  <Label className="mb-1.5 block text-xs">Last Name</Label>
                  <Textarea value={child.lastName} onChange={(e) => set('lastName', e.target.value)} className={singleLineClass} placeholder="e.g. Okafor" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block text-xs">Age</Label>
                  <Textarea value={child.age} onChange={(e) => set('age', e.target.value)} placeholder="e.g. 12" className={singleLineClass} />
                </div>
                <div>
                  <Label className="mb-1.5 block text-xs">Gender</Label>
                  <Select value={child.gender} onValueChange={(v) => set('gender', v)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent className="bg-white dark:bg-black">
                      {GENDER_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block text-xs">T-Shirt Size</Label>
                  <Select value={child.tshirtSize} onValueChange={(v) => set('tshirtSize', v)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent className="bg-white dark:bg-black">
                      {TSHIRT_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-1.5 block text-xs">Swimming Ability</Label>
                  <Select value={child.swimmingAbility} onValueChange={(v) => set('swimmingAbility', v)}>
                    <SelectTrigger className="h-12"><SelectValue placeholder="Select ability" /></SelectTrigger>
                    <SelectContent className="bg-white dark:bg-black">
                      {SWIM_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Medical &amp; Dietary</p>
                <div className="space-y-3">
                  {[
                    { field: 'allergies' as const, label: 'Known Allergies' },
                    { field: 'medications' as const, label: 'Current Medications' },
                    { field: 'medicalConditions' as const, label: 'Medical Conditions' },
                    { field: 'dietaryRestrictions' as const, label: 'Dietary Restrictions' },
                    { field: 'specialNeeds' as const, label: 'Special Needs / Accommodations' },
                  ].map(({ field, label }) => (
                    <div key={field}>
                      <Label className="mb-1.5 block text-xs">{label}</Label>
                      <Textarea value={child[field]} onChange={(e) => set(field, e.target.value)} className="min-h-[70px]" placeholder="None, or describe..." />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Registration Component ───────────────────────────────────────
export function Registration() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<typeof TICKET_OPTIONS[number] | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [groupChildren, setGroupChildren] = useState<ChildInfo[]>([
    { ...EMPTY_CHILD },
    { ...EMPTY_CHILD },
    { ...EMPTY_CHILD },
    { ...EMPTY_CHILD },
  ]);

  // Load Paystack inline script once on mount
  useEffect(() => {
    if (document.getElementById('paystack-inline-js')) return;
    const script = document.createElement('script');
    script.id = 'paystack-inline-js';
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const { register, handleSubmit, control, getValues, trigger, formState: { errors } } = useForm<FormData>({
    shouldUnregister: false,
    defaultValues: {
      parentFirstName: '',
      parentLastName: '',
      parentEmail: '',
      parentPhone: '',
      relationship: '',
      emergencyContact: '',
      emergencyPhone: '',
      childFirstName: '',
      childLastName: '',
      childAge: '',
      childGender: '',
      allergies: '',
      medications: '',
      medicalConditions: '',
      dietaryRestrictions: '',
      specialNeeds: '',
      tshirtSize: '',
      swimmingAbility: '',
    },
  });

  const totalSteps = selectedTicket?.groupTicket ? 5 : 4;

  const updateGroupChild = (index: number, updated: ChildInfo) => {
    setGroupChildren((prev) => {
      const next = [...prev];
      next[index] = updated;
      return next;
    });
  };

  const logToSheet = async (data: FormData, paymentStatus: string, extraChildren?: ChildInfo[]) => {
    const child1: ChildInfo = {
      firstName: data.childFirstName,
      lastName: data.childLastName,
      age: data.childAge,
      gender: data.childGender,
      tshirtSize: data.tshirtSize,
      swimmingAbility: data.swimmingAbility,
      allergies: data.allergies,
      medications: data.medications,
      medicalConditions: data.medicalConditions,
      dietaryRestrictions: data.dietaryRestrictions,
      specialNeeds: data.specialNeeds,
    };

    const allChildren = extraChildren ? [child1, ...extraChildren] : [child1];

    const base: Record<string, string> = {
      parentFirstName: data.parentFirstName,
      parentLastName: data.parentLastName,
      parentEmail: data.parentEmail,
      parentPhone: data.parentPhone,
      relationship: data.relationship,
      emergencyContact: data.emergencyContact,
      emergencyPhone: data.emergencyPhone,
      ticketType: selectedTicket?.label ?? '',
      amount: String(selectedTicket?.amount ?? 0),
      paymentStatus,
      totalChildren: String(allChildren.length),
    };

    const childrenFlat: Record<string, string> = {};
    allChildren.forEach((child, i) => {
      const n = i + 1;
      childrenFlat[`child${n}FirstName`] = child.firstName;
      childrenFlat[`child${n}LastName`] = child.lastName;
      childrenFlat[`child${n}Age`] = child.age;
      childrenFlat[`child${n}Gender`] = child.gender;
      childrenFlat[`child${n}TshirtSize`] = child.tshirtSize;
      childrenFlat[`child${n}SwimmingAbility`] = child.swimmingAbility;
      childrenFlat[`child${n}Allergies`] = child.allergies;
      childrenFlat[`child${n}Medications`] = child.medications;
      childrenFlat[`child${n}MedicalConditions`] = child.medicalConditions;
      childrenFlat[`child${n}DietaryRestrictions`] = child.dietaryRestrictions;
      childrenFlat[`child${n}SpecialNeeds`] = child.specialNeeds;
    });

    const params = new URLSearchParams({ ...base, ...childrenFlat });
    try {
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, { method: 'GET', mode: 'no-cors' });
    } catch (err) {
      console.error('Sheet log error:', err);
    }
  };

  const openPayment = (data: FormData) => {
    if (!window.PaystackPop) {
      setSubmitError(true);
      console.error('Paystack script not loaded yet.');
      setIsLoading(false);
      return;
    }

    const extraChildren = selectedTicket?.groupTicket ? groupChildren : undefined;
    const reference = `RAVE_${Date.now()}_${Math.floor(Math.random() * 100000)}`;

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: data.parentEmail,
      amount: selectedTicket!.amount, // kobo
      currency: 'NGN',
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: 'Parent Name', variable_name: 'parent_name', value: `${data.parentFirstName} ${data.parentLastName}` },
          { display_name: 'Child 1 Name', variable_name: 'child_1_name', value: `${data.childFirstName} ${data.childLastName}` },
          { display_name: 'Ticket Type', variable_name: 'ticket_type', value: selectedTicket!.label },
          { display_name: 'Phone', variable_name: 'phone', value: data.parentPhone },
        ],
      },
      callback: (response) => {
        logToSheet(data, `paid | ref: ${response.reference}`, extraChildren);
        window.location.href = `/?payment=success&ref=${response.reference}`;
      },
      onClose: () => {
        setIsLoading(false);
      },
    });

    handler.openIframe();
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedTicket) { setSubmitError(true); return; }
    setIsLoading(true);
    setSubmitError(false);
    const extraChildren = selectedTicket.groupTicket ? groupChildren : undefined;
    await logToSheet(data, 'pending', extraChildren);
    openPayment(data);
  };

  const stepLabels = selectedTicket?.groupTicket
    ? ['Parent', 'Child 1', 'Medical', 'Ticket', 'Group']
    : ['Parent', 'Child', 'Medical', 'Ticket'];

  const validateStep = () => {
    const v = getValues();

    if (step === 1) {
      if (!v.parentFirstName.trim()) return 'First name is required';
      if (!v.parentLastName.trim()) return 'Last name is required';
      if (!v.parentEmail.trim()) return 'Email is required';
      if (!v.parentPhone.trim()) return 'Phone number is required';
      if (!v.relationship) return 'Please select your relationship';
      if (!v.emergencyContact.trim()) return 'Emergency contact is required';
      if (!v.emergencyPhone.trim()) return 'Emergency phone is required';
    }

    if (step === 2) {
      if (!v.childFirstName.trim()) return "Child's first name is required";
      if (!v.childLastName.trim()) return "Child's last name is required";
      if (!v.childAge.trim()) return "Child's age is required";
      if (!v.childGender) return "Please select the child's gender";
      if (!v.tshirtSize) return 'Please select a t-shirt size';
      if (!v.swimmingAbility) return 'Please select swimming ability';
    }

    return null; // no error
  };

  return (
    <section id="register" className="py-8 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 rounded-3xl px-4 py-6 sm:px-6 sm:py-8
            bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800
            shadow-lg backdrop-blur-md transition-colors duration-300"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-foreground">Limited Spots Available</span>
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
          {stepLabels.map((label, idx) => {
            const s = idx + 1;
            return (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 text-xs ${step >= s ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                    {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                  </div>
                  <span className="text-[10px] text-muted-foreground hidden sm:block">{label}</span>
                </div>
                {s < totalSteps && (
                  <div className={`w-6 sm:w-10 h-0.5 mx-1 sm:mx-2 mb-4 ${step > s ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-muted'
                    }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl p-5 sm:p-8 lg:p-10 border shadow-xl bg-white/95 dark:bg-zinc-900/95 border-zinc-200 dark:border-zinc-800 backdrop-blur-md transition-colors duration-300"
        >

          {/* STEP 1 — Parent / Guardian */}
          <div className={step === 1 ? 'block' : 'hidden'}>
            <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
              <h3 className="text-2xl font-black text-foreground">Parent / Guardian Information</h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div><Label className="mb-2 block">First Name</Label><Textarea {...register('parentFirstName', { required: 'First name is required' })} placeholder="Jane" className={singleLineClass} /> {errors.parentFirstName && <p className="text-red-500 text-xs mt-1">{errors.parentFirstName.message}</p>} </div>
                <div><Label className="mb-2 block">Last Name</Label><Textarea {...register('parentLastName', { required: 'Last name is required' })} placeholder="Doe" className={singleLineClass} /> {errors.parentLastName && <p className="text-red-500 text-xs mt-1">{errors.parentLastName.message}</p>} </div>
              </div>

              <div><Label className="mb-2 block">Email Address</Label><Textarea {...register('parentEmail', { required: 'Enter a valid Email' })} placeholder="jane@example.com" className={singleLineClass} /> {errors.parentEmail && <p className="text-red-500 text-xs mt-1">{errors.parentEmail.message}</p>} </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div><Label className="mb-2 block">Phone Number</Label><Textarea {...register('parentPhone', { required: 'Field required' })} placeholder="+234..." className={singleLineClass} /> {errors.parentPhone && <p className="text-red-500 text-xs mt-1">{errors.parentPhone.message}</p>} </div>
                <div>
                  <Label className="mb-2 block">Relationship</Label>
                  <Controller
                    name="relationship"
                    control={control}
                    rules={{ required: 'Please select your relationship' }}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="h-12"><SelectValue placeholder="Select relationship" /></SelectTrigger>
                        <SelectContent className="bg-white dark:bg-black">
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )} />
                </div>
              </div>

              {validationError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-5">
                <div><Label className="mb-2 block">Emergency Contact</Label><Textarea {...register('emergencyContact')} placeholder="Full name" className={singleLineClass} /></div>
                <div><Label className="mb-2 block">Emergency Phone</Label><Textarea {...register('emergencyPhone')} placeholder="+234..." className={singleLineClass} /></div>
              </div>

              <div className="flex justify-end pt-3">
                <Button type="button" onClick={async () => {
                  const valid = await trigger(['parentFirstName', 'parentLastName', 'parentEmail', 'parentPhone', 'relationship', 'emergencyContact', 'emergencyPhone']);
                  if (valid) { setValidationError(null); setStep(2); }
                }} className="bg-gradient-to-r from-purple-600 to-pink-600">
                  Next <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* STEP 2 — Child 1 */}
          <div className={step === 2 ? 'block' : 'hidden'}>
            <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div>
                <h3 className="text-2xl font-black">Child Information</h3>
                {selectedTicket?.groupTicket && (
                  <p className="text-sm text-muted-foreground mt-1">This is Child 1 — you'll add the remaining 4 children in a later step.</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div><Label className="mb-2 block">First Name</Label><Textarea {...register('childFirstName', { required: 'Field is required' })} className={singleLineClass} /> {errors.childFirstName && <p className="text-red-500 text-xs mt-1">{errors.childFirstName.message}</p>} </div>
                <div><Label className="mb-2 block">Last Name</Label><Textarea {...register('childLastName', { required: 'Field is required' })} className={singleLineClass} /> {errors.childLastName && <p className="text-red-500 text-xs mt-1">{errors.childLastName.message}</p>} </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div><Label className="mb-2 block">Age</Label><Textarea {...register('childAge', { required: 'Field is required' })} placeholder="e.g. 12" className={singleLineClass} /> {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge.message}</p>} </div>
                <div>
                  <Label className="mb-2 block">Gender</Label>
                  <Controller name="childGender" control={control} rules={{ required: 'Please select gender' }} render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select gender" /></SelectTrigger>
                      <SelectContent className="bg-white dark:bg-black">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  )} />
                </div>
              </div>
              {/* swiming and t-shirt size */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label className="mb-2 block">T-Shirt Size</Label>
                  <Controller name="tshirtSize" control={control} rules={{ required: 'Please select a size' }} render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select size" /></SelectTrigger>
                      <SelectContent className="bg-white dark:bg-black">
                        <SelectItem value="xs">XS</SelectItem><SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem><SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  )} />
                </div>
                <div>
                  <Label className="mb-2 block">Swimming Ability</Label>
                  <Controller name="swimmingAbility" control={control} rules={{ required: 'Please select swimming ability' }} render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select ability" /></SelectTrigger>
                      <SelectContent className="bg-white dark:bg-black">
                        <SelectItem value="none">Cannot swim</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  )} />
                </div>
              </div>

              {validationError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                <Button type="button" onClick={async () => {
                  const valid = await trigger(['childFirstName', 'childLastName', 'childAge', 'childGender', 'tshirtSize', 'swimmingAbility']);
                  if (valid) { setValidationError(null); setStep(3); }
                }} className="bg-gradient-to-r from-purple-600 to-pink-600">
                  Next <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* STEP 3 — Medical */}
          <div className={step === 3 ? 'block' : 'hidden'}>
            <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div>
                <h3 className="text-2xl font-black">Medical &amp; Safety Information</h3>
                {selectedTicket?.groupTicket && (
                  <p className="text-sm text-muted-foreground mt-1">For Child 1. You'll add medical info for the other children in the next step.</p>
                )}
              </div>

              <div><Label className="mb-2 block">Known Allergies</Label><Textarea {...register('allergies')} className="min-h-[100px]" /></div>
              <div><Label className="mb-2 block">Current Medications</Label><Textarea {...register('medications')} /></div>
              <div><Label className="mb-2 block">Medical Conditions</Label><Textarea {...register('medicalConditions')} /></div>
              <div><Label className="mb-2 block">Dietary Restrictions</Label><Textarea {...register('dietaryRestrictions')} className="min-h-[100px]" /></div>
              <div><Label className="mb-2 block">Special Needs / Accommodations</Label><Textarea {...register('specialNeeds')} /></div>

              {validationError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => {
                  setValidationError(null);
                  setStep(2);
                }}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                <Button type="button" onClick={() => setStep(4)} className="bg-gradient-to-r from-purple-600 to-pink-600">Next <ChevronRight className="ml-2 w-4 h-4" /></Button>
              </div>
            </motion.div>
          </div>

          {/* STEP 4 — Ticket Selection */}
          <div className={step === 4 ? 'block' : 'hidden'}>
            <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div>
                <h3 className="text-2xl font-black">Choose Your Ticket</h3>
                <p className="text-sm text-muted-foreground mt-1">Select a ticket type — a secure Paystack payment window will open.</p>
              </div>

              <div className="grid gap-4">
                {TICKET_OPTIONS.map((ticket) => {
                  const Icon = ticket.icon;
                  const isSelected = selectedTicket?.value === ticket.value;
                  return (
                    <motion.button
                      key={ticket.value}
                      type="button"
                      onClick={() => { setSelectedTicket(ticket); setSubmitError(false); }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${isSelected ? `${ticket.border} ${ticket.bg} shadow-md` : 'border-border hover:border-zinc-400 dark:hover:border-zinc-600'
                        }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ticket.color} flex items-center justify-center shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-base leading-tight">{ticket.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{ticket.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className={`text-lg font-black bg-gradient-to-r ${ticket.color} bg-clip-text text-transparent`}>{ticket.display}</span>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isSelected ? `bg-gradient-to-br ${ticket.color} border-transparent` : 'border-muted-foreground/30'
                            }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitError && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Please select a ticket type to continue.
                  </motion.div>
                )}
              </AnimatePresence>

              {validationError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => {
                  const err = validateStep();
                  if (err) { setValidationError(err); return; }
                  setValidationError(null);
                  setStep(3);
                }}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                <Button
                  type="button"
                  disabled={!selectedTicket}
                  onClick={() => {
                    if (!selectedTicket) { setSubmitError(true); return; }
                    if (selectedTicket.groupTicket) {
                      setStep(5);
                    } else {
                      handleSubmit(onSubmit)();
                    }
                  }}
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 px-8 transition-all duration-200 ${!selectedTicket ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
                >
                  {selectedTicket?.groupTicket
                    ? <><span>Add Children Info</span><ChevronRight className="ml-2 w-4 h-4" /></>
                    : <><span>Pay {selectedTicket?.display ?? 'Now'}</span><ChevronRight className="ml-2 w-4 h-4" /></>
                  }
                </Button>
              </div>
            </motion.div>
          </div>

          {/* STEP 5 — Group Children 2–5 */}
          <div className={step === 5 ? 'block' : 'hidden'}>
            <motion.div initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                    <UserPlus className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">Children 2–5</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Child 1 was captured in the previous steps. Fill in details for the remaining 4 children below.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-400/30 rounded-2xl px-4 py-3">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <p className="text-sm text-foreground"><span className="font-semibold">Child 1</span> info already captured in Steps 2 &amp; 3.</p>
              </div>

              <div className="space-y-3">
                {groupChildren.map((child, i) => (
                  <ChildCard
                    key={i}
                    index={i + 2} // display as Child 2, 3, 4, 5
                    child={child}
                    onChange={(updated) => updateGroupChild(i, updated)}
                  />
                ))}
              </div>

              <AnimatePresence>
                {submitError && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Payment could not be completed. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              {validationError && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              <div className="flex justify-between pt-3">
                <Button type="button" variant="outline" onClick={() => setStep(4)}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-gradient-to-r from-purple-600 to-pink-600 px-8 transition-all duration-200 ${isLoading ? 'scale-95 opacity-80' : 'hover:scale-105'}`}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Opening payment...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">Pay {selectedTicket?.display} <ChevronRight className="w-4 h-4" /></span>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>

        </form>
      </div>
    </section>
  );
}