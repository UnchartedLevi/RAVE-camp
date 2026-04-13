import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Search, Mail } from 'lucide-react';

const faqData = [
    {
        category: 'General Information',
        questions: [
            {
                question: 'What is R.A.V.E. Leadership Camp?',
                answer: 'R.A.V.E. (Recharge • Adjust • Vibe • Engage & Empower) is a 6-day intensive leadership development camp for young people aged 13-19. We focus on building leadership skills, drug awareness, digital wellness, and assertiveness through interactive workshops, guest speakers, and hands-on activities.',
            },
            {
                question: 'Who can attend the camp?',
                answer: 'The camp is open to youth aged 13-19 from all countries. Participants should be passionate about personal growth, leadership, and making a positive impact in their communities. No prior leadership experience is required.',
            },
            {
                question: 'When and where does the camp take place?',
                answer: 'R.A.V.E. Camp 2026 runs from July 15-20, 2026, in Lagos, Nigeria. We also offer limited virtual participation options for international participants who cannot attend in person.',
            },
            {
                question: 'What is the camp schedule like?',
                answer: 'Each day runs from 8:00 AM to 7:00 PM, filled with workshops, guest speaker sessions, team activities, and social events. You can view the detailed schedule on our Schedule page.',
            },
        ],
    },
    {
        category: 'Registration & Payment',
        questions: [
            {
                question: 'How do I register for the camp?',
                answer: 'Click the "Register Now" button on our website and complete the multi-step registration form. You\'ll need to provide personal details, emergency contact information, and medical information. Parents/guardians must approve registration for participants under 18.',
            },
            {
                question: 'What are the registration fees?',
                answer: 'We offer three pricing tiers: Early Bird (₦45,000 - until April 15), Standard (₦55,000 - until May 30), and Group Rate (₦40,000 per person for groups of 5+). Limited scholarships are available for qualified applicants.',
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept payments via Paystack and Flutterwave, including bank transfers, debit cards, and mobile money. International participants can pay via PayPal or bank wire transfer.',
            },
            {
                question: 'Is there a refund policy?',
                answer: 'Full refunds are available if you cancel 30+ days before camp starts. Cancellations 15-29 days before receive 50% refund. No refunds are given for cancellations within 14 days of camp start date.',
            },
        ],
    },
    {
        category: 'Camp Experience',
        questions: [
            {
                question: 'What topics will be covered at the camp?',
                answer: 'We cover four core areas: Leadership Development, Drug Awareness & Prevention, Digital Wellness & Social Media Responsibility, and Assertiveness & Confidence Building. Each day focuses on different aspects through workshops, speakers, and activities.',
            },
            {
                question: 'Who are the guest speakers and mentors?',
                answer: 'Our speakers include successful entrepreneurs, tech leaders, health professionals, and youth advocates. Mentors are carefully selected professionals with expertise in leadership, technology, education, and youth development. View our Speakers and Mentors pages for details.',
            },
            {
                question: 'What is the UN Assembly Simulation?',
                answer: 'Participants represent different countries in a simulated United Nations assembly, discussing global issues and developing diplomatic solutions. This teaches negotiation, public speaking, and international cooperation skills.',
            },
            {
                question: 'Will there be technology workshops?',
                answer: 'Yes! We partner with robotics companies to offer hands-on technology workshops, including basic robotics, coding introduction, and digital innovation sessions.',
            },
        ],
    },
    {
        category: 'Logistics & Accommodation',
        questions: [
            {
                question: 'Is accommodation provided?',
                answer: 'For in-person participants from outside Lagos, we can arrange accommodation at partner hotels near the venue. This is available at an additional cost and must be requested during registration.',
            },
            {
                question: 'What about meals?',
                answer: 'All meals (breakfast, lunch, and dinner) are included in the registration fee. We accommodate dietary restrictions and allergies - please indicate any requirements on your registration form.',
            },
            {
                question: 'What should I bring to camp?',
                answer: 'Bring comfortable clothing, a notebook and pen, water bottle, any prescribed medications, and a positive attitude! A detailed packing list will be sent after registration confirmation.',
            },
            {
                question: 'Is transportation provided?',
                answer: 'We provide shuttle services from designated pick-up points in Lagos. Details will be shared with confirmed participants. For those traveling from other cities, we can help coordinate arrival logistics.',
            },
        ],
    },
    {
        category: 'Health & Safety',
        questions: [
            {
                question: 'What health and safety measures are in place?',
                answer: 'We have medical professionals on-site throughout the camp. All venues meet safety standards, and we maintain comprehensive insurance coverage. COVID-19 protocols will be followed based on current guidelines.',
            },
            {
                question: 'What if my child has medical needs?',
                answer: 'Please provide complete medical information during registration. Our medical team can administer prescribed medications and handle special health requirements. Parents will be contacted immediately for any medical concerns.',
            },
            {
                question: 'How do you ensure participant safety?',
                answer: 'All staff and volunteers undergo background checks. We maintain strict supervision ratios, have clear conduct policies, and use secure check-in/check-out procedures. Emergency contacts are always available.',
            },
        ],
    },
    {
        category: 'Parents & Guardians',
        questions: [
            {
                question: 'Can parents attend the camp?',
                answer: 'The camp is designed as a youth-only experience to encourage independence and peer bonding. However, we hold parent orientation sessions before camp and provide daily updates during the event. Parents are welcome at opening and closing ceremonies.',
            },
            {
                question: 'How can I stay updated during the camp?',
                answer: 'We provide daily photo updates on our social media, send email summaries each evening, and maintain a parent WhatsApp group for real-time communication.',
            },
            {
                question: 'Who do I contact with questions?',
                answer: 'Email us at info@ravecamp.org, call +234 (0) 123-4567, or WhatsApp us. Our parent information page also has detailed FAQs and resources.',
            },
        ],
    },
];

export function FAQ() {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const filteredFAQs = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
            q =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    })).filter(category => category.questions.length > 0);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-300 dark:from-gray-900 dark:to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-800 dark:text-gray-400 max-w-3xl mx-auto">
                        Find answers to common questions about R.A.V.E. Camp
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12"
                >
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                        />
                    </div>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-8">
                    {filteredFAQs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                                {category.category}
                            </h3>
                            <div className="space-y-3">
                                {category.questions.map((item, itemIndex) => {
                                    const id = `${categoryIndex}-${itemIndex}`;
                                    const isOpen = openItems.includes(id);

                                    return (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-600/50 transition-all"
                                        >
                                            <button
                                                onClick={() => toggleItem(id)}
                                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 dark:hover:bg-gray-700/50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-800 dark:text-white pr-4">
                                                    {item.question}
                                                </span>
                                                {isOpen ? (
                                                    <ChevronUp className="flex-shrink-0 text-purple-600 dark:text-purple-400" size={24} />
                                                ) : (
                                                    <ChevronDown className="flex-shrink-0 text-purple-600 dark:text-purple-400" size={24} />
                                                )}
                                            </button>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="px-6 pb-4 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-4"
                                                >
                                                    {item.answer}
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
