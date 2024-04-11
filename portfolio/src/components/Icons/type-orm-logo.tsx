import Image from "next/image";


export function TypeORMLogo({className} : {className? : string}) {

  return (

    <Image className={`object-contain ${className}`} src="/tech/type-orm-logo.png" alt="" width={1000} height={1000}/>
  )
}