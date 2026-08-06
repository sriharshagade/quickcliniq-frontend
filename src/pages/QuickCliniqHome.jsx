import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import "./QuickCliniqHome.css";

const colors = {
  primary: "#00342b",
  onPrimary: "#ffffff",
  primaryContainer: "#004d40",
  onPrimaryContainer: "#7ebdac",
  secondary: "#006d2f",
  onSecondary: "#ffffff",
  surface: "#f7f9fb",
  surfaceContainer: "#ffffff",
  onSurface: "#191c1e",
  onSurfaceVariant: "#3f4945",
  outline: "#707975",
  outlineVariant: "#bfc9c4",
  error: "#ba1a1a",
  errorContainer: "#ffdad6",
};

const features = [
  {
    icon: "💬",
    title: "WhatsApp booking flow",
    description:
      "Patients can book, reschedule, or cancel appointments from WhatsApp with short replies like 1, book, modify, or cancel.",
  },
  {
    icon: "🤖",
    title: "Conversational intake",
    description:
      "Collect patient name, age, gender, symptoms, doctor, date, and time with guided prompts that understand natural text.",
  },
  {
    icon: "✏️",
    title: "Modify without restarting",
    description:
      "Patients can correct details such as name, age, symptoms, gender, date, doctor, or slot before confirmation.",
  },
  {
    icon: "📊",
    title: "Clinic control pane",
    description:
      "Doctors, schedules, unavailable blocks, patient records, and appointment activity stay organized for staff.",
  },
];

const workflow = [
  "Patient chooses book, reschedule, or cancel",
  "Quick Cliniq collects the right appointment details",
  "Available slots are checked against doctor schedules",
  "The clinic dashboard stays updated automatically",
];

const capabilities = [
  "Book, reschedule, and cancel on WhatsApp",
  "Natural date and time understanding",
  "Multi-doctor routing",
  "Doctor schedule and slot management",
  "Unavailable time blocking",
  "Dashboard appointment records",
  "Patient profile continuity",
  "Theme and clinic preferences",
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: colors.outlineVariant,
        backgroundColor: colors.surfaceContainer,
      }}
    >
      <div className="flex justify-between items-center h-16 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold transition hover:opacity-80"
          style={{ color: colors.primary }}
          aria-label="Quick Cliniq"
        >
          Quick Cliniq
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="transition hover:opacity-70"
            style={{ color: colors.onSurfaceVariant }}
          >
            Features
          </a>
          <a
            href="#workflow"
            className="transition hover:opacity-70"
            style={{ color: colors.onSurfaceVariant }}
          >
            Workflow
          </a>
          <a
            href="#operations"
            className="transition hover:opacity-70"
            style={{ color: colors.onSurfaceVariant }}
          >
            Operations
          </a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block px-4 py-2 font-semibold text-sm transition hover:opacity-80"
            style={{ color: colors.onSurfaceVariant }}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 font-semibold text-sm transition hover:opacity-90"
            style={{
              backgroundColor: colors.primaryContainer,
              color: colors.onPrimaryContainer,
              borderRadius: "4px",
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
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: colors.primary }}
          >
            Why waste half a day when the consultation is just 15 minutes?
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: colors.onSurfaceVariant }}
          >
            Stop the manual chase. Quick Cliniq's WhatsApp automation eliminates
            waiting times for clinics like Dr. Smith Hospital by connecting
            patients to their 15-minute slots instantly, streamlining flow
            without the back-and-forth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 font-semibold transition hover:opacity-90 flex items-center justify-center gap-2"
              style={{
                backgroundColor: colors.primaryContainer,
                color: colors.onPrimaryContainer,
                borderRadius: "4px",
              }}
            >
              Open clinic dashboard
              <ArrowRight size={18} />
            </button>
            <button
              className="px-8 py-3 font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: colors.surfaceContainer,
                color: colors.primary,
                border: `1px solid ${colors.outlineVariant}`,
                borderRadius: "4px",
              }}
            >
              View product
            </button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-sm">
            <div className="flex -space-x-2">
              {["C1", "C2", "C3"].map((c) => (
                <div
                  key={c}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2"
                  style={{
                    backgroundColor: colors.surface,
                    borderColor: colors.surfaceContainer,
                    color: colors.primary,
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
            <p style={{ color: colors.onSurfaceVariant }}>
              Trusted by 500+ modern clinics.
            </p>
          </div>
        </div>

        {/* Split Screen Mockup */}
        <div
          className="rounded-lg border overflow-hidden flex flex-col md:flex-row h-[550px]"
          style={{
            borderColor: colors.outlineVariant,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* WhatsApp Side */}
          <div className="w-full md:w-1/2 bg-[#efeae2] border-r flex flex-col">
            <div className="bg-[#075e54] text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075e54] font-bold text-sm">
                QC
              </div>
              <div>
                <div className="font-bold text-sm">Dr. Smith Hospital</div>
                <div className="text-xs opacity-80">online</div>
              </div>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {[
                {
                  sender: "end",
                  text: "Hi, I need to book an appointment with Dr. Smith tomorrow morning.",
                },
                {
                  sender: "start",
                  text: "Hello! Dr. Smith has availability at 09:00 AM and 10:30 AM tomorrow. Which would you prefer?",
                },
                { sender: "end", text: "9:00 AM works." },
              ].map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "end" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="p-3 rounded-lg max-w-[85%] shadow-sm text-sm"
                    style={{
                      backgroundColor:
                        msg.sender === "end" ? "#dcf8c6" : "#ffffff",
                      color: "#191c1e",
                      borderRadius:
                        msg.sender === "end"
                          ? "8px 0px 8px 8px"
                          : "0px 8px 8px 8px",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="p-3 flex items-center gap-2 border-t"
              style={{ borderColor: colors.outlineVariant }}
            >
              <span style={{ color: colors.outlineVariant }}>+</span>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 text-sm outline-none"
                style={{
                  backgroundColor: colors.surfaceContainer,
                  border: `1px solid ${colors.outlineVariant}`,
                  borderRadius: "20px",
                  color: colors.onSurface,
                }}
              />
              <span style={{ color: colors.primary }}>✓</span>
            </div>
          </div>

          {/* Dashboard Side */}
          <div
            className="w-full md:w-1/2 flex flex-col p-6"
            style={{ backgroundColor: colors.surface }}
          >
            <div
              className="flex justify-between items-center mb-6 pb-4 border-b"
              style={{ borderColor: colors.outlineVariant }}
            >
              <div className="font-bold" style={{ color: colors.primary }}>
                Live Clinic Flow
              </div>
              <div
                className="flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded"
                style={{
                  backgroundColor: "#f0fdf4",
                  color: colors.secondary,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                ></span>
                Active
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  doctor: "Dr. Smith - Consult",
                  time: "09:00 AM",
                  status: "Confirmed via WhatsApp",
                },
                {
                  doctor: "Dr. Jones - Follow up",
                  time: "10:00 AM",
                  status: "Pending confirmation",
                },
              ].map((apt, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border relative overflow-hidden ${
                    i === 1 ? "opacity-70" : ""
                  }`}
                  style={{
                    backgroundColor: colors.surfaceContainer,
                    borderColor: colors.outlineVariant,
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{
                      backgroundColor:
                        i === 0 ? colors.secondary : colors.outlineVariant,
                    }}
                  ></div>
                  <div className="flex justify-between items-start mb-2">
                    <div
                      className="font-bold text-sm"
                      style={{
                        color: i === 0 ? colors.primary : colors.onSurfaceVariant,
                      }}
                    >
                      {apt.doctor}
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: colors.outline }}
                    >
                      {apt.time}
                    </span>
                  </div>
                  <div
                    className="text-sm flex items-center gap-2"
                    style={{
                      color: i === 0 ? colors.onSurfaceVariant : colors.outline,
                    }}
                  >
                    <span>{i === 0 ? "✓" : "📅"}</span>
                    {apt.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section style={{ backgroundColor: colors.surfaceContainer }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-lg border transition hover:shadow-md"
              style={{
                backgroundColor: colors.surfaceContainer,
                borderColor: colors.outlineVariant,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="text-3xl mb-6">{f.icon}</div>
              <h3
                className="font-bold text-lg mb-3"
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
    <section style={{ backgroundColor: colors.surface }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl font-bold mb-6 leading-tight"
            style={{ color: colors.primary }}
          >
            From WhatsApp message to confirmed visit, without the manual chase.
          </h2>
          <p
            className="text-lg"
            style={{ color: colors.onSurfaceVariant }}
          >
            Patients can use natural messages or simple menu numbers. Staff
            still keep final visibility through the clinic dashboard.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div
            className="hidden md:block absolute top-1/2 left-0 w-full h-px -z-10 -translate-y-1/2"
            style={{ backgroundColor: colors.outlineVariant }}
          ></div>
          {workflow.map((step, i) => (
            <div
              key={step}
              className="p-6 rounded-lg border text-center"
              style={{
                backgroundColor: colors.surfaceContainer,
                borderColor: colors.outlineVariant,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center font-bold text-lg mx-auto mb-4 rounded-full"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.onPrimary,
                }}
              >
                {i + 1}
              </div>
              <p
                className="text-sm"
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
    <section style={{ backgroundColor: colors.surface }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl font-bold mb-6 leading-tight"
            style={{ color: colors.primary }}
          >
            Built around real clinic operations.
          </h2>
          <p className="text-lg" style={{ color: colors.onSurfaceVariant }}>
            The goal is not to add another noisy tool. It is to reduce
            repetitive coordination while keeping appointment control clear.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="flex items-start gap-3 p-5 rounded-lg border"
              style={{
                backgroundColor: colors.surfaceContainer,
                borderColor: colors.outlineVariant,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Check
                size={20}
                className="flex-shrink-0 mt-0.5"
                style={{ color: colors.primary }}
              />
              <span
                className="text-sm leading-relaxed"
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

function CTA() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundColor: colors.primary,
        backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, #005043 100%)`,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2
          className="text-4xl font-bold mb-6 leading-tight"
          style={{ color: colors.onPrimary }}
        >
          Give your clinic desk a cleaner way to manage appointments.
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.onPrimary }}>
          Start with WhatsApp booking, then bring schedules, doctors, patients,
          and appointment changes into one calmer workflow.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 font-semibold transition hover:opacity-90 inline-flex items-center gap-2 rounded"
          style={{
            backgroundColor: colors.onPrimary,
            color: colors.primary,
          }}
        >
          Open Quick Cliniq
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t py-8 px-6"
      style={{
        borderColor: colors.outlineVariant,
        backgroundColor: colors.surface,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="font-bold text-lg mb-2" style={{ color: colors.primary }}>
            Quick Cliniq
          </div>
          <div className="text-xs" style={{ color: colors.onSurfaceVariant }}>
            @2026 a tynzo product
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end gap-4 text-xs">
          <a
            href="mailto:support@quickcliniq.com"
            className="transition hover:opacity-70"
            style={{ color: colors.onSurfaceVariant }}
          >
            support@quickcliniq.com
          </a>
          <a
            href="https://wa.me/918297997929"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:opacity-70"
            style={{ color: colors.onSurfaceVariant }}
          >
            <Phone size={14} />
            WhatsApp Support
          </a>
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
        <Workflow />
        <Operations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
