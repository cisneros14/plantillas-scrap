import { siteConfig } from "@/config/site";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Twitter, Linkedin } from "lucide-react";

export function TeamSection() {
  const team = siteConfig.team || [];

  if (team.length === 0) return null;

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {siteConfig.team_section.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.team_section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map(
            (
              member: {
                name: string;
                role: string;
                image: string;
                bio: string;
                social?: { twitter?: string; linkedin?: string };
              },
              index: number,
            ) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative flex items-center justify-center bg-muted/50">
                  {/* In real app, use next/image here */}
                  <Avatar className="h-32 w-32 md:h-40 md:w-40">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
                      {member.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    {member.social?.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
