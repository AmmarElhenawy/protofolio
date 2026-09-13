import type { Metadata } from "next";
import Link from "next/link";
import AppShell from "@/components/layout/AppShell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <AppShell>
      <div className="px-4 sm:px-8 lg:px-12 py-16 max-w-3xl mx-auto w-full flex-1 flex flex-col justify-center">
        <PageHeading
          title="Page not found"
          eyebrow="404"
          tag="404"
          intro="The address you followed does not exist. It may have been moved or the link may be out of date."
        />
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-on-primary px-6 py-4 font-headline font-bold uppercase tracking-widest text-xs rounded-lg hover:brightness-110 transition-all active:scale-95"
          >
            Back to home
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
