# V3L0Z - Teste Prático

## Deploy

[https://marvel-comics-nu.vercel.app/](https://marvel-comics-nu.vercel.app/)

## Tecnologias Utilizadas

- **Typescript**
- **Next.js**
- **Tailwind CSS**

## Bibliotecas

- **Aceternity UI**
- **aimata**
- **shadcn/ui**
- **axios**
- **tanStack Query**
- **lodash**

## Instalação e Execução em uma Máquina Local

1. Acesse a [Documentação da Marvel](https://developer.marvel.com/documentation/getting_started) e crie uma conta no site da Marvel.
2. Entre na área do desenvolvedor para obter sua **chave pública** e **chave privada**.

3. Acesse um [gerador de hash MD5](https://www.md5hashgenerator.com/) e converta o seguinte valor:

```plaintext
1 + chave privada + chave pública
```

4. Copie a hash resultante.

5. Baixe o repositório e crie um arquivo `.env` com as seguintes variáveis:

```plaintext
NEXT_PUBLIC_KEY={sua_chave_publica}
NEXT_PUBLIC_HASH_KEY={hash_que_foi_gerada}
```

6. Execute o comando:

```plaintext
npm install
```

7. Logo em seguida, execute:

```plaintext
npm run dev
```

## Aviso

Boa parte das informações da API são disponibilizadas apenas em inglês
