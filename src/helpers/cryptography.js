import {
  createCipheriv,
  randomBytes,
  createDecipheriv,
} from "crypto-browserify";

class Crypto {
  constructor() {
    this.key = randomBytes(32);
    this.iv = randomBytes(16);
  }

  encrypt(str) {
    const cipher = createCipheriv("aes256", this.key, this.iv);
    const encryptedMessage =
      cipher.update(str, "utf-8", "hex") + cipher.final("hex");

    return encryptedMessage;
  }

  decrypt(encryptedStr) {
    const decipher = createDecipheriv("aes256", this.key, this.iv);
    let decryptedMessage = decipher.update(encryptedStr, "hex", "utf-8");
    decryptedMessage += decipher.final("utf-8");

    return decryptedMessage;
  }
}

export default new Crypto();
