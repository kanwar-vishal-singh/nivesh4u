"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Property } from "@/types/property";
import { Phone, Mail, MessageSquare } from "lucide-react";

interface PropertyContactProps {
  property: Property;
}

export default function PropertyContact({ property }: PropertyContactProps) {
  return (
    <div className="space-y-6 lg:sticky lg:top-4">
      <Card>
        <CardHeader>
          <CardTitle>Contact Agent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-sm text-muted-foreground">property@nivesh4u.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Send Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="space-y-2">
              <Input type="tel" placeholder="Your Phone" />
            </div>
            <div className="space-y-2">
              <Textarea 
                placeholder="I'm interested in this property. Please contact me."
                rows={4}
              />
            </div>
            <Button className="w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}