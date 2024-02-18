import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

const queryClient = new QueryClient();
dayjs.extend(relativeTime);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
