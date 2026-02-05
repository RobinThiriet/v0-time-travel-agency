"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "agent";
  content: string;
}

const MOCK_RESPONSES: Record<string, string> = {
  bonjour:
    "Bonjour, voyageur temporel ! Je suis Chronos, votre assistant. Comment puis-je vous aider a planifier votre prochaine aventure ?",
  paris:
    "Paris en 1889 est une destination magnifique ! Vous pourrez assister a l'inauguration de la Tour Eiffel et decouvrir l'Exposition Universelle. Voulez-vous reserver ?",
  dinosaure:
    "Le Cretace est notre destination la plus extreme ! Vous serez equipe d'un bouclier protecteur dernier cri. L'experience est inoubliable !",
  florence:
    "Florence en 1504, le berceau de la Renaissance ! Imaginez voir Michel-Ange devoiler le David... C'est une experience unique.",
  prix: "Nos tarifs varient selon l'epoque et la duree. Comptez environ 15 000 Cr pour un voyage standard de 3 jours. Nous offrons aussi des forfaits premium.",
  danger:
    "La securite est notre priorite absolue. Chaque voyageur est equipe d'un dispositif de rappel d'urgence et nos guides temporels sont certifies. Le risque est proche de zero !",
  default:
    "C'est une excellente question ! Pour une reponse detaillee, je vous invite a consulter nos destinations ou a prendre rendez-vous avec un conseiller temporel. Que puis-je faire d'autre pour vous ?",
};

function getMockResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(MOCK_RESPONSES)) {
    if (key !== "default" && lower.includes(key)) {
      return value;
    }
  }
  return MOCK_RESPONSES.default;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content:
        "Bienvenue chez TimeTravel Agency ! Je suis Chronos, votre assistant temporel. Comment puis-je vous aider ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getMockResponse(userMessage);
      setMessages((prev) => [...prev, { role: "agent", content: response }]);
      setIsTyping(false);
    }, 1000);
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 hover:scale-110"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-80 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl sm:w-96">
          {/* Header */}
          <div className="border-b border-border bg-secondary px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-foreground">
                Chronos - Agent Temporel
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              En ligne | Temps de reponse : instantane
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={`msg-${i}-${msg.role}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                    Chronos ecrit...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
                aria-label="Envoyer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
