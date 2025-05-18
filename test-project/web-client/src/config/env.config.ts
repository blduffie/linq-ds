export const env: { env: 'local' | 'dev' | 'qa' | 'prod' } = {
  env: 'local',
};

export interface EnvironmentConfig {
  apiUrl: string;
}

export interface Environments {
  local: EnvironmentConfig;
  dev: EnvironmentConfig;
  qa: EnvironmentConfig;
  prod: EnvironmentConfig;
}

export const environments: Environments = {
  local: {
    apiUrl: 'https://localhost:7220/api',
  },
  dev: {
    apiUrl: 'https://localhost:7220/api',
  },
  qa: {
    apiUrl: 'https://localhost:7220/api',
  },
  prod: {
    apiUrl: 'https://localhost:7220/api',
  },
};
