import { handleSupportRequest } from '@/lib/help/assistant.mjs';

export const runtime = 'nodejs';

/** Answers public product-support questions without receiving staff credentials or tenant records. */
export async function POST(request: Request) { return handleSupportRequest(request); }
