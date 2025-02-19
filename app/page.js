import Image from "next/image";
import PhoneInput from "antd-phone-input";
import { Form, Select, Input, Button, ConfigProvider } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PhoneInput enableSearch />
    </main>
  );
}
