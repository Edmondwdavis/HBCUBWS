import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-black mb-6"
      >
        The Legacy of Black Wall Street
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
            <p>
              Explore Black entrepreneurship, community resilience, and economic
              empowerment through a 16-week interdisciplinary course.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Learning Modules</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Tulsa & Greenwood Legacy</li>
              <li>Black Entrepreneurship History</li>
              <li>Financial Literacy & AI Tools</li>
              <li>Capstone Project Showcase</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-100">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Capstone Options</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Business Pitch Deck</li>
              <li>Digital Historical Exhibit</li>
              <li>Economic Empowerment Plan</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-10">
        <Button className="text-lg px-6 py-2">Enroll Now</Button>
      </div>
    </div>
  );
}
