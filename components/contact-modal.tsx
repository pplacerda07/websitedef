"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSuccess(true)
        setIsSubmitting(false)

        // Reset after showing success message
        setTimeout(() => {
            setIsSuccess(false)
            onOpenChange(false)
        }, 2000)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] bg-background border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-[var(--font-display)] tracking-wide">
                        {isSuccess ? "Message Sent" : "Get in Touch"}
                    </DialogTitle>
                    <DialogDescription className="text-white/60">
                        {isSuccess
                            ? "Thanks for reaching out! We'll get back to you shortly."
                            : "Tell us about your project or just say hello."}
                    </DialogDescription>
                </DialogHeader>

                {!isSuccess && (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    placeholder="Name"
                                    required
                                    className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Textarea
                                    placeholder="Message"
                                    required
                                    className="bg-white/5 border-white/10 focus:border-white/30 text-white placeholder:text-white/30 min-h-[120px] resize-none"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-sm uppercase tracking-widest bg-white text-black hover:bg-white/90"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
