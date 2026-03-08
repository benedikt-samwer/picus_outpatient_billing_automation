import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Brain,
  ShieldCheck,
  Download,
  ArrowRight,
  Stethoscope,
  Clock,
  Users,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-6 w-6" />
            <span className="text-lg font-bold">KV Billing</span>
          </div>
          <Link to="/app">
            <Button size="sm">
              Open App
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Built for German outpatient practices
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Medical billing,{" "}
            <span className="text-primary">automated.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Extract ICD-10 and EBM codes from treatment documentation
            automatically. Validate, review, and export KVDT files -- all in one
            tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/app">
              <Button size="lg" className="w-full sm:w-auto text-base px-8">
                Start Billing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base px-8"
              >
                How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-foreground">
              Everything you need for KV billing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From doctor notes to submission-ready KVDT files in minutes, not
              hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">AI Code Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  GPT-powered extraction of ICD-10 and EBM codes from free-form
                  treatment documentation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">
                  Deterministic Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Every extracted code is validated against ICD-10-GM and EBM
                  reference tables before export.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Smart Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Automatically detects consultation duration from notes and maps
                  to the correct EBM tier.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">KVDT Export</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Generate fixed-width KVDT files ready for quarterly submission
                  to the KV.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-foreground">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Three simple steps from documentation to billing file.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold">Enter Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Paste or type the treatment notes, select the specialty and KV
                region, and click Process.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold">Review Codes</h3>
              <p className="text-sm text-muted-foreground">
                The AI extracts ICD-10 and EBM codes. Each code is validated
                automatically -- review and confirm.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold">Export KVDT</h3>
              <p className="text-sm text-muted-foreground">
                Export individual encounters or batch-export an entire quarter as
                a KVDT file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">ICD-10-GM</div>
              <p className="text-sm text-muted-foreground">
                Full German modification code set supported
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">EBM</div>
              <p className="text-sm text-muted-foreground">
                Outpatient billing codes with duration tiers
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">Quarterly</div>
              <p className="text-sm text-muted-foreground">
                Batch export all patients per quarter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to streamline your billing?
          </h2>
          <p className="text-muted-foreground">
            Stop spending hours on manual code entry. Let AI handle the
            extraction while you focus on patient care.
          </p>
          <Link to="/app">
            <Button size="lg" className="text-base px-10 mt-4">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span>KV Billing MVP</span>
          </div>
          <p>Built for German outpatient practices</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
