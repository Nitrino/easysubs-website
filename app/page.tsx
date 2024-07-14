// app/page.tsx

import { redirect } from 'next/navigation';
import { generateStaticParams } from './generateStaticParams';

export default function RootPage() {
  redirect('/en');
}

export { generateStaticParams };