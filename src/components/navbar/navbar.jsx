import React from "react";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/homepage" />
        <Link href="/about" />
        <Link href="/contact" />
        <Link href="/admin" />
        <Link href="/login" />
      </div>
    </div>
  );
};

export default NavigationBar;
