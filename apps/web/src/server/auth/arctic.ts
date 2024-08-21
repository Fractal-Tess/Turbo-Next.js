import { Discord } from 'arctic';

import { ENV } from '$/env';

export type DiscordUser = {
  id: string; // snowflake: the user's id
  username: string; // the user's username, not unique across the platform
  discriminator: string; // the user's Discord-tag
  global_name?: string | null; // the user's display name, if set; for bots, this is the application name
  avatar?: string | null; // the user's avatar hash
  bot?: boolean; // whether the user belongs to an OAuth2 application
  system?: boolean; // whether the user is an Official Discord System user (part of the urgent message system)
  mfa_enabled?: boolean; // whether the user has two factor enabled on their account
  banner?: string | null; // the user's banner hash
  accent_color?: number | null; // the user's banner color encoded as an integer representation of a hexadecimal color code
  locale?: string; // the user's chosen language option
  verified?: boolean; // whether the email on this account has been verified
  email: string; // the user's email
  flags?: number; // the flags on a user's account
  premium_type?: number; // the type of Nitro subscription on a user's account
  public_flags?: number; // the public flags on a user's account
};

export const discord = new Discord(
  ENV.DISCORD_CLIENT_ID,
  ENV.DISCORD_CLIENT_SECRET,
  `${ENV.FQDN}/sign-in/discord/callback` // Redirect URL
);
