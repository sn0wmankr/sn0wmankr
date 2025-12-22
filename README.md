# ❄️ Infrastructure & Tech Stack

A robust, multi-layered server infrastructure optimized for **Security** and **Scalability**. This environment hosts a mix of private game servers, community platforms, and mission-critical church services.

---

## 🏗️ Core Infrastructure Stack
The foundation of the infrastructure, leveraging modern virtualization and robust server OS.

| Layer | Technology |
| :--- | :--- |
| **Operating System** | ![Ubuntu](https://img.shields.io/badge/Ubuntu%2024.04%20LTS-E95420?style=for-the-badge&logo=ubuntu&logoColor=white) |
| **Virtualization** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Portainer](https://img.shields.io/badge/Portainer-13BEFF?style=for-the-badge&logo=portainer&logoColor=white) |
| **Backend & Web** | ![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white) ![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white) ![Apache](https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=Apache&logoColor=white) |
| **Database & Cache** | ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) |

---

## 🛡️ Network & Security (Zero Trust)
Hardened security architecture protecting internal assets from external threats.

- **Edge Security:** `OPNsense` Firewall with `IDS/IPS` & `CrowdSec` integration.
- **Secure Access:** `Cloudflare Tunnel` for ingress without open ports, `Cloudflare Access` for identity-based control.
- **Private Mesh:** `Tailscale` for secure inter-node communication.
- **Traffic Control:** `AdGuard Home` for DNS filtering and internal ad-blocking.

---

## 📈 Observability & Monitoring
Comprehensive monitoring to ensure 99.9% uptime across all nodes.

### **Monitoring Stack**
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=flat-square&logo=prometheus&logoColor=white) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white) ![Uptime Kuma](https://img.shields.io/badge/Uptime%20Kuma-61DAFB?style=flat-square&logo=uptime-kuma&logoColor=black)

### **External Health Checks**
- **SaaS Monitoring:** `BetterStack`, `StatusCake`, `Cronitor`.
- **Automated Status Page:** `Upptime` (Powered by GitHub Actions).

---

## 🗄️ Multi-Cloud Backup Strategy
Ensuring data integrity through automated, redundant off-site backups.

- **Orchestration:** `Restic` (Deduplication) & `Rclone` (Sync).
- **Automation:** Custom `Bash Scripts` triggered via `Crontab`.
- **Targets:**
    - 📁 **Google Drive** (Primary Cloud Storage)
    - 📁 **MEGA** (Secondary Redundancy)

---

## 🚀 Specialized Services

### 🎮 Game Server Hosting
- **Management:** `Pterodactyl Panel` & `Wings`.
- **Primary Game:** `Counter-Strike 2` (High-performance dedicated nodes).

### ⛪ Mission & Community
- **Church Platform:** `Rhymix` (CMS).
- **E-Commerce:** `WooCommerce`.
- **Knowledge Base:** `Wiki.js`.
- **Media:** `Jellyfin` (Dockerized).

---

## 🌐 External Cloud Ecosystem
- **Static Hosting:** `GitHub Pages`, `Google Sites`.
- **Version Control:** `GitHub`.
- **DNS Management:** `Cloudflare`.

---
> **"Stability through redundancy, Security through Zero Trust."** > Maintained by **sn0wman**
