"use client";

import ContactForm from './ContactForm';
import Section from '@/components/sections/Section';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function SendMessage() {
    return (
      <Section title="Send Us a Message" variant="solid" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            <div className="lg:w-1/2 space-y-6 pt-8">
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-primary mr-3" />
                <p className="text-grayDark font-poppins text-lg">+91 9211013220</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-primary mr-3" />
                <p className="text-grayDark font-poppins text-lg">support@kidurat.com</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-primary mr-3" />
                <p className="text-grayDark font-poppins text-lg">Noida, Uttar Pradesh, India, CA 94000, USA</p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200" />
        </div>
      </Section>
    );
  }
