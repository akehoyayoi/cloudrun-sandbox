# cloudrun-sandbox

## Motivation

I would like to confirm authentification between firebase function and cloudrun.
I would like to know what settings I need to make to handle it properly.

## cloudrun API

### How to deploy

```
$ gcloud builds submit --tag gcr.io/[project_name]/cloudrun-api 
$ gcloud run deploy --image gcr.io/[project_name]/cloudrun-api --platform managed
```

### How to test

```
curl -H "Authorization: Bearer $(gcloud auth print-identity-token)" https://[assigne_domain]/test
```

## firebase API

### How to deploy

```
firebase deploy --only functions
```