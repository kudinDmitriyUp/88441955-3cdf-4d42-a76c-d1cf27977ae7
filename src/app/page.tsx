"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Gem, Heart, Users, Palette, Shield, Star, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Luxe Jewelry"
          button={{
            text: "Visit Store",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Exquisite Jewelry Collection"
          description="Discover handcrafted pieces that celebrate life's precious moments"
          tag="Premium Collection"
          tagIcon={Gem}
          buttons={[
            {
              text: "Explore Collection",
              href: "product"
            },
            {
              text: "Contact Us",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252597890-1otoilep.jpg",
              imageAlt: "Elegant diamond ring"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252598693-0q1c7s35.jpg",
              imageAlt: "Gold luxury necklace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252599395-bs7zeyax.jpg",
              imageAlt: "Diamond earrings"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252600293-noth32hi.jpg",
              imageAlt: "Luxury gold watch"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252600991-oro1le6u.jpg",
              imageAlt: "Precious gemstone jewelry"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Craftsmanship & Excellence"
          description="For over three decades, we have been creating timeless jewelry pieces that tell your unique story. Each piece is meticulously crafted by our master artisans using the finest materials and traditional techniques."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          buttons={[
            {
              text: "Learn More",
              href: "about"
            },
            {
              text: "Visit Showroom",
              href: "contact"
            }
          ]}
          bulletPoints={[
            {
              title: "Master Artisans",
              description: "Expert craftsmen with decades of experience in fine jewelry making",
              icon: Users
            },
            {
              title: "Premium Materials",
              description: "Only the finest gold, diamonds, and precious stones in our creations",
              icon: Gem
            },
            {
              title: "Custom Designs",
              description: "Personalized jewelry tailored to your vision and preferences",
              icon: Palette
            },
            {
              title: "Lifetime Warranty",
              description: "Comprehensive warranty and maintenance for all our jewelry pieces",
              icon: Shield
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252604422-jof1ho4l.jpg"
          imageAlt="Master craftsman creating jewelry"
          imagePosition="right"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Collection"
          description="Explore our most sought-after jewelry pieces, each one a masterpiece of craftsmanship"
          tag="Bestsellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Diamond Solitaire Ring",
              price: "$2,850",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252601830-g5ox7eqk.jpg",
              imageAlt: "Diamond solitaire ring",
              onProductClick: () => console.log('Ring clicked')
            },
            {
              id: "2",
              name: "Gold Chain Necklace",
              price: "$1,200",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252602762-nelg2x17.jpg",
              imageAlt: "Gold chain necklace",
              onProductClick: () => console.log('Necklace clicked')
            },
            {
              id: "3",
              name: "Diamond Stud Earrings",
              price: "$950",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252603478-b4qconx3.jpg",
              imageAlt: "Diamond stud earrings",
              onProductClick: () => console.log('Earrings clicked')
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Read testimonials from our valued customers who chose us for their special moments"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Williams",
              role: "Bride",
              testimonial: "The engagement ring from Luxe Jewelry exceeded all my expectations. The craftsmanship is absolutely stunning and the service was impeccable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252611523-xk09i6jl.jpg",
              imageAlt: "Happy customer Sarah Williams"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Groom",
              testimonial: "I wanted something unique for my wedding day. Their custom design service created the perfect watch that I'll treasure forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252612292-0o1niif7.jpg",
              imageAlt: "Satisfied customer Michael Chen"
            },
            {
              id: "3",
              name: "Jennifer & David",
              role: "Anniversary Couple",
              testimonial: "For our 25th anniversary, we chose matching diamond pieces. The quality and attention to detail is remarkable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252613077-h2laluv4.jpg",
              imageAlt: "Happy anniversary couple"
            },
            {
              id: "4",
              name: "Emily Rodriguez",
              role: "Fashion Enthusiast",
              testimonial: "Every piece I own from Luxe Jewelry becomes a conversation starter. The elegance and sophistication are unmatched.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252613754-zs5h7sgz.jpg",
              imageAlt: "Elegant customer Emily Rodriguez"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Schedule Your Consultation"
          description="Visit our showroom or reach out to discuss your custom jewelry needs. Our experts are here to help you find the perfect piece."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your jewelry preferences or any questions you have...",
            rows: 4,
            required: true
          }}
          buttonText="Schedule Consultation"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763252604422-jof1ho4l.jpg"
          imageAlt="Jewelry consultation"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Luxe Jewelry"
          copyrightText="© 2025 Luxe Jewelry. All rights reserved."
          columns={[
            {
              title: "Collections",
              items: [
                {
                  label: "Engagement Rings",
                  href: "rings"
                },
                {
                  label: "Necklaces",
                  href: "necklaces"
                },
                {
                  label: "Earrings",
                  href: "earrings"
                },
                {
                  label: "Bracelets",
                  href: "bracelets"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Custom Design",
                  href: "custom"
                },
                {
                  label: "Repairs",
                  href: "repairs"
                },
                {
                  label: "Appraisals",
                  href: "appraisals"
                },
                {
                  label: "Consultation",
                  href: "consultation"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Craftsmanship",
                  href: "craftsmanship"
                },
                {
                  label: "Showroom",
                  href: "showroom"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/luxejewelry",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/luxejewelry",
              ariaLabel: "Follow us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}