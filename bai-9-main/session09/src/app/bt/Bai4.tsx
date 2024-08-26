import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
export default function Bai4() {
  return (
    <div>Bai4
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Môn học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
          <SelectItem value="apple">HTML</SelectItem>
          <SelectItem value="banana">CSS</SelectItem>
          <SelectItem value="blueberry">JavaScript</SelectItem>
          <SelectItem value="grapes">ReactJs</SelectItem>
          <SelectItem value="pineapple">NextJs</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
