import MainLayout from "../features/layouts/components/main-layout";
import { LayoutIF } from "../features/layouts/interfaces";

export default function Home({ children }: LayoutIF) {
  return <MainLayout>{children}</MainLayout>;
}
