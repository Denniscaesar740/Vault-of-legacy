import { EncryptionService } from './encryption';

export interface Block {
  index: number;
  timestamp: Date;
  data: any;
  previousHash: string;
  hash: string;
  nonce: number;
}

export class Blockchain {
  private chain: Block[];
  private difficulty: number;

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  private createGenesisBlock(): Block {
    const genesisBlock: Block = {
      index: 0,
      timestamp: new Date(),
      data: 'Genesis Block - Vault of Legacy',
      previousHash: '0',
      hash: '',
      nonce: 0
    };
    genesisBlock.hash = this.calculateHash(genesisBlock);
    return genesisBlock;
  }

  private calculateHash(block: Block): string {
    const blockString = `${block.index}${block.timestamp}${JSON.stringify(block.data)}${block.previousHash}${block.nonce}`;
    return EncryptionService.hashData(blockString);
  }

  private mineBlock(block: Block): void {
    const target = Array(this.difficulty + 1).join('0');
    
    while (block.hash.substring(0, this.difficulty) !== target) {
      block.nonce++;
      block.hash = this.calculateHash(block);
    }
  }

  addBlock(data: any): Block {
    const previousBlock = this.getLatestBlock();
    const newBlock: Block = {
      index: previousBlock.index + 1,
      timestamp: new Date(),
      data: data,
      previousHash: previousBlock.hash,
      hash: '',
      nonce: 0
    };

    this.mineBlock(newBlock);
    this.chain.push(newBlock);
    return newBlock;
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== this.calculateHash(currentBlock)) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }

  getChain(): Block[] {
    return this.chain;
  }
}

export const blockchain = new Blockchain();