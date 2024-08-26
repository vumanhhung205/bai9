import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

const users = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
    },
    {
        id: 2,
        name: 'Nguyễn Văn B',

    },
]
export async function GET(){
    return NextResponse.json({
        data: users

    });
}

export async function POST(req: NextRequest){
    
    
    // Bước 1: Lấy dữ liệu từ client
    const dataClient = await req.json();
    // Bước 2: Push dữ liệu lấy được từ client vào trong mảng
    users.push(dataClient);
    // Bước 3: Trả về mảng mới vừa được thêm vào
    return NextResponse.json({
        message:"POST method",
        
    });
}


