import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>
      <div>
      <p className="text-sm text-muted-foreground">
  Réutilisé par Benjamin Dassonville
</p>
<br />
Ce site est réalisé à partir d’une vidéo YouTube, je ne suis pas le créateur original.
</div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
