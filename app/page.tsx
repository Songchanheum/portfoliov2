import Image from 'next/image'

export default function Home() {

const splash_html = `
<iframe id="splash_iframe" class="border-none w-full h-[600px] absolute" src="/splash/main/index.html" scrolling="no" style="top: 0px;">
</iframe>
`;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: splash_html }} ></div>
    </>
  )
}
