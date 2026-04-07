import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

export function Media() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    'https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjZWxlYnJhdGluZyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzc0MzQyNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1636293235717-7895bf07abc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBwcm9mZXNzaW9uYWxzJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NzQzNDI0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1773270196888-0cdacb07edae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB5b3V0aHxlbnwxfHx8fDE3NzQzNDI0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwbGlnaHRzJTIwc3RhZ2V8ZW58MXx8fHwxNzc0MzQyNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1660794486110-7fca371c86b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjBjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc3NDM0MjQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1737729991003-521d47240eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3NzQzMzg4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const partners = [
    { name: 'TechCabal', logo: 'TC' },
    { name: 'African Union', logo: 'AU' },
    { name: 'UN Youth', logo: 'UN' },
    { name: 'Google', logo: 'G' },
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Meta', logo: 'M' },
    { name: 'AWS', logo: 'AWS' },
    { name: 'GitHub', logo: 'GH' },
  ];

  return (
    <section id="media" className="py-24 bg-white text-slate-900 dark:bg-black dark:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Media & Partners
          </h2>
          <p className="text-xl dark:text-gray-400 max-w-3xl mx-auto">
            Relive the moments and meet our incredible partners making this possible.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwbGlnaHRzJTIwc3RhZ2V8ZW58MXx8fHwxNzc0MzQyNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Event highlight"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-white mb-2">R.A.V.E. Camp 2025 Highlights</h3>
              <p className="text-lg text-gray-300">Watch the transformative journey of our previous cohort</p>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold dark:text-white mb-8 text-center">Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold dark:text-white mb-8 text-center">Our Partners</h3>
          <div id='partner' className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-black bg-transparent border border-black/40 rounded-xl p-6 flex items-center justify-center hover:bg-black/5 hover:border-black/20 transition-all duration-300 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20"
              >
                <span className="text-2xl font-black text-black dark:text-white">
                  {partner.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            src={selectedImage}
            alt="Gallery full"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
