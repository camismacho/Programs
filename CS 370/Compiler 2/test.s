	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"goodbye"
.LC2:
	.string	"second"
.LC3:
	.string	"printf call %s %d\n"
.LC4:
	.string	"and more"
.LC5:
	.string	"Hello World!"
	.text
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC0, %rsi
	call	puts

	popq	%rbp
	ret
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movq	$.LC1, %rsi
	movq	$.LC2, %rdi
	movl	$42, %eax
	call	func
	movq	$.LC3, %rsi
	movq	$.LC4, %rdi
	movl	$42, %eax
	pushq	%rax
	movl	$4, %eax
	pushq	%rax
	movl	$5, %eax
	pushq	%rax
	movl	$2, %eax
	popq	%rcx
	addl	%ecx, %eax
	popq	%rcx
	addl	%ecx, %eax
	popq	%rcx
	addl	%ecx, %eax
	call	printf
	movq	$.LC5, %rsi
	call	puts

	popq	%rbp
	ret
