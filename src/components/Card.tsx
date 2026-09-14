import { View, ViewProps } from 'react-native';

function Card({ children, className, ...props }: ViewProps) {
  return (
    <View
      className={`rounded-lg border-secondary/20 bg-white dark:bg-background-dark ${className ?? ''}`}
      {...props}
    >
      {children}
    </View>
  );
}

function CardHeader({ children, className, ...props }: ViewProps) {
  return (
    <View
      className={`p-md border-b border-secondary/20 ${className ?? ''}`}
      {...props}
    >
      {children}
    </View>
  );
}

function CardBody({ children, className, ...props }: ViewProps) {
  return (
    <View className={`p-md ${className ?? ''}`} {...props}>
      {children}
    </View>
  );
}

function CardFooter({ children, className, ...props }: ViewProps) {
  return (
    <View
      className={`p-md border-t border-secondary/20 ${className ?? ''}`}
      {...props}
    >
      {children}
    </View>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card };
