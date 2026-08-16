import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import "./QuickCliniqHome.css";

const colors = {
  primary: "#00342b",
  onPrimary: "#ffffff",
  primaryContainer: "#004d40",
  onPrimaryContainer: "#ffffff",
  secondary: "#006d2f",
  onSecondary: "#ffffff",
  surface: "#fbfcfd",
  surfaceContainer: "#ffffff",
  onSurface: "#0f1419",
  onSurfaceVariant: "#525f57",
  outline: "#707975",
  outlineVariant: "#e0e5e1",
  error: "#b3261e",
  errorContainer: "#ffdad6",
  divider: "#e8eae8",
};

const features = [
  {
    title: "WhatsApp Booking Flow",
    description:
      "Patients book directly from WhatsApp using natural language or menu options. No app installation, no complex forms—just replies like 'book', '1', or 'tomorrow morning'.",
  },
  {
    title: "Intelligent Patient Intake",
    description:
      "Automatically collect patient name, age, gender, symptoms, doctor preference, date, and time. Handles natural text and understands context without rigid forms.",
  },
  {
    title: "Flexible Modification",
    description:
      "Patients review and correct appointment details before final confirmation. Change any detail (doctor, time, date, symptoms) without restarting the entire process.",
  },
  {
    title: "Clinic Dashboard",
    description:
      "Real-time view of all appointments, patient records, doctor schedules, no-shows, and unavailable time blocks. One place for complete clinic operations.",
  },
];

const workflow = [
  "Patient chooses book, reschedule, or cancel",
  "Quick Cliniq collects the right appointment details",
  "Available slots are checked against doctor schedules",
  "The clinic dashboard stays updated automatically",
];

const capabilities = [
  "Appointment booking, rescheduling, cancellation via WhatsApp",
  "Natural language understanding (dates, times, doctor names)",
  "Multi-doctor clinic routing and scheduling",
  "Doctor availability and slot management",
  "Unavailable time blocking (lunch, breaks, off-days)",
  "Patient profile continuity across visits",
  "Multi-language support (English, Hindi, Telugu, Tamil, Kannada, Malayalam)",
  "Clinic-specific settings and preferences",
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: colors.surfaceContainer,
        borderBottom: `1px solid ${colors.divider}`,
      }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 h-14 sm:h-16 max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="transition hover:opacity-70 active:opacity-50"
          aria-label="Quick Cliniq"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <img
            src="/src/images/logo_nobg.png"
            alt="Quick Cliniq"
            className="h-28 sm:h-32"
            style={{ maxHeight: "128px", objectFit: "contain" }}
          />
        </button>
        <div className="hidden md:flex items-center gap-10 text-sm tracking-tight">
          <a
            href="#features"
            className="transition hover:opacity-60 active:opacity-40"
            style={{ color: colors.onSurfaceVariant }}
          >
            Features
          </a>
          <a
            href="#workflow"
            className="transition hover:opacity-60 active:opacity-40"
            style={{ color: colors.onSurfaceVariant }}
          >
            Workflow
          </a>
          <a
            href="#operations"
            className="transition hover:opacity-60 active:opacity-40"
            style={{ color: colors.onSurfaceVariant }}
          >
            Operations
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:block px-4 py-2 text-sm font-medium transition hover:opacity-60 active:opacity-40"
            style={{ color: colors.onSurfaceVariant }}
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 sm:px-6 py-2 font-medium text-sm transition hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: colors.primary,
              color: colors.onPrimary,
              borderRadius: "6px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ backgroundColor: colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 leading-tight tracking-tight"
            style={{ color: colors.primary }}
          >
            Why waste half a day for a 15-minute consultation?
          </h1>
          <p
            className="text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed"
            style={{ color: colors.onSurfaceVariant }}
          >
            Stop manual scheduling. Quick Cliniq's WhatsApp automation connects patients to their slots instantly, eliminating waiting times and back-and-forth coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
            <button
              onClick={() => navigate("/login")}
              className="px-6 sm:px-8 py-3 font-medium transition hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 order-first sm:order-none"
              style={{
                backgroundColor: colors.primary,
                color: colors.onPrimary,
                borderRadius: "8px",
              }}
            >
              Open dashboard
              <ArrowRight size={16} />
            </button>
            <button
              className="px-6 sm:px-8 py-3 font-medium transition hover:opacity-80 active:opacity-70"
              style={{
                backgroundColor: colors.surfaceContainer,
                color: colors.primary,
                border: `1px solid ${colors.divider}`,
                borderRadius: "8px",
              }}
            >
              Learn more
            </button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <p style={{ color: colors.onSurfaceVariant }}>
              Demo • Customizable for your clinic
            </p>
          </div>
        </div>

        {/* Hero Visual */}
        <div
          className="rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center relative"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, #006d5c 100%)`,
            minHeight: "380px",
            boxShadow: "0 20px 60px rgba(0, 52, 43, 0.2)",
          }}
        >
          {/* Hero Content */}
          <div className="max-w-2xl z-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug"
              style={{ color: colors.onPrimary }}
            >
              Appointment Management Through WhatsApp
            </h2>
            <p
              className="text-base sm:text-lg mb-8"
              style={{ color: colors.onPrimary, opacity: 0.95 }}
            >
              No apps. No forms. Just simple conversations. Patients book, reschedule, and manage appointments directly on WhatsApp.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {[
                "WhatsApp Native",
                "Natural Language",
                "Real-time Updates",
                "Multi-language",
              ].map((feature) => (
                <div
                  key={feature}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: colors.onPrimary,
                    border: `1px solid rgba(255, 255, 255, 0.3)`,
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
            style={{
              backgroundColor: colors.onPrimary,
              transform: "translate(50%, -50%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10"
            style={{
              backgroundColor: colors.onPrimary,
              transform: "translate(-50%, 50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section style={{ backgroundColor: colors.surfaceContainer }} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 sm:p-8 rounded-xl border transition hover:shadow-sm"
              style={{
                backgroundColor: colors.surfaceContainer,
                borderColor: colors.divider,
                borderWidth: "1px",
              }}
            >
              <h3
                className="font-semibold text-lg sm:text-base mb-3 leading-snug"
                style={{ color: colors.primary }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section style={{ backgroundColor: colors.surface }} id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-snug"
            style={{ color: colors.primary }}
          >
            From message to confirmed appointment, without the back-and-forth.
          </h2>
          <p
            className="text-base sm:text-lg"
            style={{ color: colors.onSurfaceVariant }}
          >
            Patients use natural language or simple numbers. Staff maintain full visibility through the clinic dashboard.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          <div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-px -z-10 -translate-y-1/2"
            style={{ backgroundColor: colors.divider }}
          />
          {workflow.map((step, i) => (
            <div
              key={step}
              className="p-6 sm:p-8 rounded-xl border text-center bg-white relative"
              style={{
                borderColor: colors.divider,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center font-semibold text-base mx-auto mb-4 rounded-full flex-shrink-0"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                }}
              >
                {i + 1}
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.onSurfaceVariant }}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Operations() {
  return (
    <section style={{ backgroundColor: colors.surface }} id="operations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-snug"
            style={{ color: colors.primary }}
          >
            Built for real clinic operations.
          </h2>
          <p className="text-base sm:text-lg" style={{ color: colors.onSurfaceVariant }}>
            Reduce repetitive coordination while maintaining clear appointment control. Not another noisy tool—designed to simplify how clinics work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="flex items-start gap-3 p-5 rounded-lg border bg-white"
              style={{
                borderColor: colors.divider,
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Check
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: colors.primary }}
              />
              <span
                className="text-sm leading-relaxed font-medium"
                style={{ color: colors.onSurface }}
              >
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const usecases = [
    {
      role: "For Doctors",
      items: [
        "Schedule management without manual calls",
        "Patient intake data organized by appointment",
        "Focus on patient care, not coordination",
        "Real-time appointment status",
      ],
    },
    {
      role: "For Clinic Admins",
      items: [
        "Dashboard with full appointment visibility",
        "No-show tracking and analytics",
        "Staff workload optimization",
        "Appointment reminders sent automatically",
      ],
    },
    {
      role: "For Patients",
      items: [
        "Book appointments without phone calls",
        "Natural language and simple menu options",
        "Instant confirmation and reminders",
        "Easy rescheduling or cancellation",
      ],
    },
  ];

  return (
    <section style={{ backgroundColor: colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-snug"
            style={{ color: colors.primary }}
          >
            Built for Every Role in the Clinic
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {usecases.map((uc) => (
            <div
              key={uc.role}
              className="p-6 sm:p-8 rounded-xl border bg-white"
              style={{
                borderColor: colors.divider,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              }}
            >
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: colors.primary }}
              >
                {uc.role}
              </h3>
              <ul className="space-y-3">
                {uc.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span style={{ color: colors.primary }}>✓</span>
                    <span style={{ color: colors.onSurface }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-snug"
          style={{ color: colors.onPrimary }}
        >
          Bring your clinic's appointments into one calmer workflow.
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-10" style={{ color: colors.onPrimary, opacity: 0.95 }}>
          Start with WhatsApp booking and expand to schedules, doctors, patients, and appointment management—all in one place.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-6 sm:px-8 py-3 font-medium transition hover:opacity-90 active:scale-95 inline-flex items-center gap-2 rounded-lg"
          style={{
            backgroundColor: colors.onPrimary,
            color: colors.primary,
          }}
        >
          Get started
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t px-4 sm:px-6 py-12 sm:py-16"
      style={{
        borderColor: colors.divider,
        backgroundColor: colors.surface,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="font-semibold text-base mb-4" style={{ color: colors.primary }}>
              Quick Cliniq
            </div>
            <p className="text-xs leading-relaxed" style={{ color: colors.onSurfaceVariant }}>
              Streamline clinic appointments with WhatsApp automation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: colors.onSurface }}>
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#workflow" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  How it Works
                </a>
              </li>
              <li>
                <a href="#operations" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  Capabilities
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: colors.onSurface }}>
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:admin@quickcliniq.com" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: colors.onSurface }}>
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="mailto:admin@quickcliniq.com"
                  className="transition hover:opacity-60"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  Email Support
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+918297997929"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:opacity-60"
                  style={{ color: colors.onSurfaceVariant }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: colors.divider,
            margin: "2rem 0",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs">
          <div style={{ color: colors.onSurfaceVariant }}>
            © 2026 Quick Cliniq. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
              Privacy Policy
            </a>
            <a href="#" className="transition hover:opacity-60" style={{ color: colors.onSurfaceVariant }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function QuickCliniqHome() {
  return (
    <div style={{ backgroundColor: colors.surface, color: colors.onSurface }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Workflow />
        <Operations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
