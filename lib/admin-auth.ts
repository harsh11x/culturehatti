import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export interface AdminUser {
  id: string
  email: string
  role: string
}

export const DEFAULT_ADMIN = {
  id: '1',
  email: 'admin@culture-hatti.com',
  password: 'admin123',
  role: 'admin'
}

export function generateAdminToken(user: AdminUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' })
}

export function verifyAdminToken(token: string): AdminUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminUser
  } catch (error) {
    return null
  }
}

export function verifyAdminAuth(req: Request): AdminUser | null {
  const authHeader = req.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  return verifyAdminToken(token)
}

export function authenticateAdmin(req: Request): AdminUser | null {
  return verifyAdminAuth(req)
}
