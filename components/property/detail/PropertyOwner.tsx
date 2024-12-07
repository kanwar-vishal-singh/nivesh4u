"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, Mail, Phone } from "lucide-react";
import { PropertyOwner } from "@/types/property";

interface PropertyOwnerProps {
  owner: PropertyOwner;
}

export default function PropertyOwner({ owner }: PropertyOwnerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Owner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src={owner.image} alt={owner.name} />
            <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{owner.name}</h3>
            <p className="text-muted-foreground">Real Estate Professional</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="font-medium">{owner.experience}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">{owner.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{owner.email}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}