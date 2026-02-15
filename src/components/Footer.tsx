import { Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">


            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2026 MyGrants. All rights reserved.</p>
          <div className="flex gap-6">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
