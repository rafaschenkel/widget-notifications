import { Check, Rocket, X, ArrowRight } from 'lucide-react';
import { Notification } from './Notification';
import { NotificationIcon } from './Notification/NotificationIcon';
import { NotificationContent } from './Notification/NotificationContent';
import { NotificationActions } from './Notification/NotificationActions';
import { NotificationAction } from './Notification/NotificationAction';

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      {/* Header */}
      <div className="bg-zinc-700 py-4 px-6 flex items-center justify-between">
        <span className="font-bold text-lg">Notificações</span>
        <button className="text-sm text-violet-500 hover:text-violet-700">
          Marcas todas como lidas
        </button>
      </div>
      {/* Recent Section */}
      <div className="bg-zinc-950 px-6 py-2 text-zinc-300">Recentes</div>
      <div className="divide-y-2 divide-zinc-900">
        <Notification.Root>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Gostaria de fazer parte do nosso grupo no Discord ?" />
          <NotificationActions>
            <NotificationAction icon={X} />
            <NotificationAction icon={Check} className="bg-violet-600 hover:bg-violet-700" />
          </NotificationActions>
        </Notification.Root>

        <Notification.Root>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Confirme seu E-mail" />
          <NotificationActions>
            <NotificationAction icon={ArrowRight} className="bg-emerald-500 hover:bg-emerald-600" />
          </NotificationActions>
        </Notification.Root>
      </div>
      {/* old Section */}
      <div className="bg-zinc-950 px-6 py-2 text-zinc-300">Antigas</div>
      <div className="divide-y-2 divide-zinc-900">
        <Notification.Root>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Bem vindo a Rocketseat" />
          <NotificationActions>
            <NotificationAction icon={X} />
          </NotificationActions>
        </Notification.Root>

        <Notification.Root>
          <NotificationIcon icon={Rocket} />
          <NotificationContent text="Você recebeu um convite para fazer parte da empresa Rocketseat" />
        </Notification.Root>
      </div>
    </div>
  );
}
