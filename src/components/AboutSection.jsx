import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Développeur Web Passionné
            </h3>

            <p className="text-muted-foreground">
              Avec bientot 2 ans de pation dans le domaine du développement Web
              je me secialise dans la création d'applications web
              modernes et réactives.
              
            </p>

            <p className="text-muted-foreground">
              Je suis passionné par la création de solutions élégantes à des problèmes complexes,
              et j’apprends constamment de nouvelles technologies et techniques pour rester à la
              pointe dans un domaine web en constante évolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactez-moi
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Développement Web</h4>
                  <p className="text-muted-foreground">
                    Création de sites web et d’applications web
                    responsives avec des frameworks modernes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Designer (UI) et (UX)</h4>
                  <p className="text-muted-foreground">
                    Conception d’interfaces intuitives et
                    d’expériences utilisateurs fluides.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestion de projet</h4>
                  <p className="text-muted-foreground">
                    Organisation et suivi des projets de leur création
                    à leur finalisation avec des approches agiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
