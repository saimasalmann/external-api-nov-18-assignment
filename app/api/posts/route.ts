// import { NextResponse } from "next/server";

// const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

// export async function GET(){
// try {
//     const response = await fetch(EXTERNAL_API_URL);
//     if(!response.ok){
//         return NextResponse.json({success:false,message:"Fetch the data from the API"},{status:response.status}

//         )
//     }
//     const data = await response.json();
//     // return NextResponse.json({success:true, data}, {status:200}) (tabnine  suggested)
//      return NextResponse.json({success:true, data})
    
// } catch (error:unknown) {
//     return NextResponse.json({success:false ,message:"Error fetching data!",error:error.message})
// }
// }
import { NextResponse } from "next/server";
const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
    try {
      const response = await fetch(EXTERNAL_API_URL);
      if (!response.ok) {
        return NextResponse.json({ success: false, message: "Fetch the data from the API" }, { status: response.status });
      }
      const data = await response.json();
      return NextResponse.json({ success: true, data });
  
    } catch (error: unknown) {
      // TypeScript requires a type check for 'unknown' errors
      if (error instanceof Error) {
        return NextResponse.json({ success: false, message: "Error fetching data!", error: error.message });
      }
      // If it's not an instance of Error, we can handle it differently
      return NextResponse.json({ success: false, message: "An unknown error occurred!" });
    }
  }