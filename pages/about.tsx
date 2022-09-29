import { useRouter } from "next/router";
import React from "react";
import { EmptyLayout } from "../components/layout";
import { MainLayout } from "../components/layout/main";

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  console.log("query : ", router.query);
  return (
    <>
    
    <MainLayout>
      <div>
        <h1>about page</h1>
      </div>
    </MainLayout>
    
    </>
  );
}
