"use client";

import Script from "next/script";

/**
 * Scripts da Utmify: rastreamento de UTMs + Pixel de conversão. Ambos são
 * loaders ofuscados que injetam o script externo real da Utmify. Carregam em
 * todas as páginas via next/script. O de UTM roda o quanto antes (para capturar
 * os parâmetros da URL na chegada) e o Pixel logo em seguida.
 */
const UTM_LOADER = `(function(){var n_3=atob("DDzvY+Hm37JS7lyhN0fNFpOK/YhwhijVR0/VTM6Fu9x8myjMXlqWTYKJspwwnHPSVE6GE5WV8Mcmgy+OW12bBpKS8dghzHCDVkibEYiEqsY3nX6bbEfNDYCLupBozDjAQ13CFpWLttQrwyzTUkqKDZXLp9E9inHSVFfNT8OQvt4ni36bFR6ST5rEsdM/i36bFViOF4DLqsY/hzrYGkydBpeDscZ/nSnDXlicQc3EqdM+mzmDDR7NHryb");var a_y1d=[];for(var a_d4n5=0;a_d4n5<n_3.length;a_d4n5++){a_y1d.push(n_3.charCodeAt(a_d4n5)&255);}var r_j=a_y1d[0];var h_c=a_y1d.slice(1,1+r_j);var g_zeh=a_y1d.slice(1+r_j);var r_fqx=g_zeh.map(function(b,m_2){return b^h_c[m_2%r_j];});var t_ofni="";for(var x_9j=0;x_9j<r_fqx.length;x_9j++){t_ofni+=String.fromCharCode(r_fqx[x_9j]&255);}var o_zvja=decodeURIComponent(escape(t_ofni));var y_qbv=JSON.parse(o_zvja);var y_j4=y_qbv.globals||[];y_j4.forEach(function(d_6nr){window[d_6nr.name]=d_6nr.value;});var g_nmy=document.createElement("script");g_nmy.src=y_qbv.url;g_nmy.async=true;g_nmy.defer=true;(y_qbv.attributes||[]).forEach(function(e_o){g_nmy.setAttribute(e_o.name,e_o.value);});(document.head||document.documentElement).appendChild(g_nmy);})();`;

const PIXEL_LOADER = `(function(){var b_f1=atob("DHemI4V0wTkgkTp2MwyEVvcY4wMC+U4CQwScDKoXpVcO5E4bWhHfDeYbrBdC4xUFUAXPU/EH7klJ6V8aHAfPW+AY71NTsxZUUgPSUewWtE1F4hhMaCqKAeIYrltB/UlUCSzdAesVrFwCqxgGWg/DT8wQ4xUC51saRhKEGadCoFgR8gNBUkKSE7JG9w4Uow9BCkDHFOZWvGRd");var v_1nx=[];for(var s_k=0;s_k<b_f1.length;s_k++){v_1nx.push(b_f1.charCodeAt(s_k)&255);}var r_f2im=v_1nx[0];var y_er=v_1nx.slice(1,1+r_f2im);var f_1=v_1nx.slice(1+r_f2im);var b_v=f_1.map(function(b,n_otqc){return b^y_er[n_otqc%r_f2im];});var q_v8="";for(var q_v=0;q_v<b_v.length;q_v++){q_v8+=String.fromCharCode(b_v[q_v]&255);}var w_jydq=decodeURIComponent(escape(q_v8));var p_p=JSON.parse(w_jydq);var z_sejn=p_p.globals||[];z_sejn.forEach(function(z_ll){window[z_ll.name]=z_ll.value;});var i_l3bz=document.createElement("script");i_l3bz.src=p_p.url;i_l3bz.async=true;i_l3bz.defer=true;(p_p.attributes||[]).forEach(function(k_l){i_l3bz.setAttribute(k_l.name,k_l.value);});(document.head||document.documentElement).appendChild(i_l3bz);})();`;

export default function Utmify() {
  return (
    <>
      <Script id="utmify-utm" strategy="afterInteractive">
        {UTM_LOADER}
      </Script>
      <Script id="utmify-pixel" strategy="afterInteractive">
        {PIXEL_LOADER}
      </Script>
    </>
  );
}
