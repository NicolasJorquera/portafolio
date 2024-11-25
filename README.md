# Portfolio

This is my portfolio where i will be uploading the projects that ive worked on.

## Run app

`npm start`

## Update website on Cpanel

- Enter Cpanel
- Go to files administrator
- Go to public_html/nicolasjorquera.com
- Upload compressed build file (.zip)
- Extract file on to nicolasjorquera.com folder

- There is no need to delete any file cause they will be overwritten
- In case of erasing files, you need to create the file .htaccess manually

### .htaccess
`
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /nicolasjorquera.com/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`
