import React from "react";

function Widget() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          
          <script type="text/javascript">
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/66ba8710146b7af4a4399095/1i549v6va';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
          </script>

        `,
      }}
    />
  );
}

export default Widget;
