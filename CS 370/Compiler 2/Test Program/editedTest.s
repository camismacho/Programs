	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"second"
.LC2:
	.string	"goodbye"
.LC3:
	.string	"and more"
.LC4:
	.string	"printf call %s %d\n"
.LC5:
	.string	"Hello World!"
	.text
    .globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
	movl	$.LC0, %edi
	call	puts
	nop
	popq	%rbp
	ret
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
	movl	$42, %edx
	movl	$.LC1, %esi
	movl	$.LC2, %edi
	movl	$0, %eax
	call	func
	movl	$53, %edx
	movl	$.LC3, %esi
	movl	$.LC4, %edi
	movl	$0, %eax
	call	printf
	movl	$.LC5, %edi
	call	puts
	movl	$0, %eax
	popq	%rbp
	ret
