<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>KIDUART sitemap</title>
        <style>
          :root { color-scheme: light; }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: "Segoe UI", ui-sans-serif, system-ui, sans-serif;
            background: #f4efe6;
            color: #10233f;
          }
          header {
            background: #10233f;
            color: #f4efe6;
            padding: 36px 8vw 28px;
          }
          header p { margin: 8px 0 0; max-width: 42rem; color: rgba(244,239,230,.78); line-height: 1.5; }
          h1 { margin: 0; font-size: 2rem; letter-spacing: -0.03em; }
          .badge {
            display: inline-block;
            margin-top: 16px;
            background: #1f8a70;
            color: white;
            border-radius: 999px;
            padding: 6px 12px;
            font-size: 13px;
            font-weight: 700;
          }
          main { padding: 28px 8vw 64px; }
          .toolbar { display: flex; gap: 12px; align-items: center; margin-bottom: 18px; }
          input {
            width: min(420px, 100%);
            border: 1px solid rgba(16,35,63,.16);
            border-radius: 999px;
            padding: 12px 16px;
            font: inherit;
            background: white;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(16,35,63,.06);
          }
          th, td { text-align: left; padding: 14px 16px; border-bottom: 1px solid rgba(16,35,63,.08); }
          th { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: rgba(16,35,63,.55); }
          a { color: #10233f; font-weight: 650; text-decoration: none; }
          a:hover { color: #1f8a70; }
          .muted { color: rgba(16,35,63,.55); font-size: 13px; white-space: nowrap; }
        </style>
      </head>
      <body>
        <header>
          <h1>KIDUART sitemap</h1>
          <p>Every public page we ask Google to crawl. Search Console should read this file, not sitemap-0.xml.</p>
          <span class="badge"><xsl:value-of select="count(//s:url)"/> pages</span>
        </header>
        <main>
          <div class="toolbar">
            <input id="q" type="search" placeholder="Filter pages" onkeyup="filterRows()"/>
          </div>
          <table>
            <thead>
              <tr>
                <th>Page</th>
                <th>Updated</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody id="rows">
              <xsl:for-each select="//s:url">
                <xsl:sort select="s:loc"/>
                <tr>
                  <td>
                    <a>
                      <xsl:attribute name="href"><xsl:value-of select="s:loc"/></xsl:attribute>
                      <xsl:value-of select="s:loc"/>
                    </a>
                  </td>
                  <td class="muted"><xsl:value-of select="substring(s:lastmod,1,10)"/></td>
                  <td class="muted"><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <script>
            function filterRows() {
              var q = document.getElementById("q").value.toLowerCase();
              var rows = document.querySelectorAll("#rows tr");
              for (var i = 0; i &lt; rows.length; i++) {
                rows[i].style.display = rows[i].textContent.toLowerCase().indexOf(q) &gt; -1 ? "" : "none";
              }
            }
          </script>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
