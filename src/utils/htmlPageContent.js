export default pageData => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:200,400,600"
      rel="stylesheet"
    />
    <meta name="theme-color" content="#fff" />
    <title>Website Builder</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: #fff;
      }

      .app-container {
        width: 93%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
      }
      .Header-container {
        margin-top: 35px;
        width: 90%;
        height: 285px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }
      .header-banner {
        margin-top: 20px;
        width: 90%;
        height: 110px;
        border-radius: 3px;
        background-image:url("${pageData.imgLink}");
        background-repeat: no-repeat, repeat;
        background-size: cover;
        color: #333;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
      }

      .Heading-banner {
        margin-top: 50px;
        width: 90%;
        height: 65px;
        border-radius: 3px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
      }

      .Heading-banner span {
        font-size: 20px;
        font-weight: 600;
      }

      .button-container {
        width: 90%;
        margin-top: 50px;
        display: flex;
        justify-content: flex-end;
      }
      .button-container button {
        min-width: 180px;
        max-width: 230px;
        background: #2555b1;
        border: none;
        padding: 15px 5px;
        font-size: 16px;
        color: #fff;
        font-weight: 900;
        border-radius: 4px;
        transition: 0.5s;
        overflow: hidden;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.16);
      }
      .button-container button:hover {
        cursor: pointer;
        background: #004de1;
      }
      h1,
      h2 {
        color: #333;
      }
    </style>
  </head>
  <body>
    <div class="app-container">
      <h1>Generated Page</h1>
      <div class="Header-container">
        <div class="header-banner"></div>
      </div>
      <div class="Heading-banner">
        <span>${pageData.bannerText}</span>
      </div>
      <div class="button-container">
        <button>${pageData.actionText}</button>
      </div>
    </div>
  </body>
</html>

`;
