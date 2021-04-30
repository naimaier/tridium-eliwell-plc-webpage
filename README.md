# Tridium Eliwell Webpage
Página customizada para utilização no webserver do CLP Eliwell Free

## Adicionando logos
As imagens são carregadas em série para evitar sobrecarregar o servidor com requests.
Para isso, as tags `<img>` devem ter o campo `src` em branco, e usaremos o seu `id` para carregarmos as imagens através da função `AddPreCacheImage()`.

Os logotipos devem estar alinhados abaixo e à esquerda na imagem.
As imagens devem ter as seguintes dimensões:
```
Logotipo grande (visualização padrão): 150x40px.

Logotipo pequeno (vizualização em dispositivos móveis): 110x35px.
```