# @nostrdocs/tinycollab

Tinycollab is a minimal, self-contained, test implementation of the Fluid Framework service packaged as a Nostr relay.

## What is this for?

Tinycollab is for **testing** real-time collab experiences and applications built on [Fluidframework](https://fluidframework.com) patterns and distributed over [Nostr](https://github.com/nostr-protocol/nostr) protocol

## Getting Started

You can install, build, and start this service by cloning [TinyCollab from source](https://github.com/nostrdocs/tinycollab)

```sh
git clone https://github.com/nostrdocs/tinycollab.git
```

Build and run it locally:

```sh
npm i
npm run build
npm run start
```

Alternatively, you can run the latest version by

```sh
npx @nostrdocs/tinycollab@latest
```

Now you can test your development experience against this local instance of Tinycollab


## Configuration

### Port

Tinycollab uses port 7070 by default. You can change the port number by setting an environment
variable named `TINYCOLLAB_PORT` to the desired number. For example:

```sh
$env:TINYCOLLAB_PORT=6502
npm run start
```

### Storage

The config.json file can be used to configure the Tinylicious service.

| Parameter     | Description                                                    | Default                |
| :------------ | :------------------------------------------------------------- | :--------------------- |
| `db.inMemory` | Boolean indicating whether ops are stored in memory or to disk | true                   |
| `db.path`     | If `db.inMemory` is false the folder on disk to store the ops  | "/var/tmp/db"          |
| `storage`     | Storage path for snapshots                                     | "/var/tmp/tinylicious" |

See config.json for more settings and their defaults.
