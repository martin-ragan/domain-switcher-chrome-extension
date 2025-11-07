export interface DomainConfig {
  targetDomain: string;
  targetPort?: string;
  useHttps: boolean;
}

export interface StorageData {
  config: DomainConfig;
}

export const DEFAULT_CONFIG: DomainConfig = {
  targetDomain: 'localhost',
  targetPort: '8000',
  useHttps: false,
};
