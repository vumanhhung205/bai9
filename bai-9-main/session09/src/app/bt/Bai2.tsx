import React from 'react'
import { Input } from "@/components/ui/input"


export default function Bai2() {
  return (
    <div>Bai2
        <Input type="email" placeholder="Rikkei Academy" />
        <br />
        <Input type="phone" placeholder="10" />
        <br />
        <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input id="picture" type="file" />
    </div>

    </div>
  )
}
