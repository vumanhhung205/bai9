import { log } from "console";
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
export async function GET(req: NextRequest,
    params: {params: {id: string}}
){
    const id = params.params.id;
    console.log(id);

    const findUser = users.find((user)=> user.id === +id);
    
    if(findUser) {
        return NextResponse.json(findUser);
    }

    return NextResponse.json({
        message: 'Invalid'
    })
}
export async function PUT(
    req: NextRequest,
    params: {params: {id: string}}
){
    const id = params.params.id;

    const dataClient = await req.json();

    const findIndex = users.findIndex(user => user.id === +id);

    if(findIndex){
        users[findIndex].name = dataClient.name;
    }
    return NextResponse.json({
        data: users
    })
}