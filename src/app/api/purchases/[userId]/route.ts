import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

// 購入履歴検索API
export async function GET(
  request: NextRequest,
  context: { params: { userId: string } }
) {
  const userId = context.params.userId;
  try {
    const purchases = await prisma.purchase.findMany({
      where: { userId: userId },
    });
    return NextResponse.json(purchases);
  } catch (err) {
    return NextResponse.json(err);
  }
}
